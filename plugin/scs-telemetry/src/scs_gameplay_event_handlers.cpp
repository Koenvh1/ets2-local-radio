#include <cstring>
#include "scs_gameplay_event_handlers.hpp"

// Plug-in
#include "scs-telemetry-common.hpp"
#include "sharedmemory.hpp"

#include "log.hpp"

extern SharedMemory* telem_mem;
extern scsTelemetryMap_t* telem_ptr;
extern void set_job_values_zero();

#pragma region scsGameplayEventHandler_t[]

// const: cancelled_gameplay
// handle gameplayevent id `job.cancelled`
const scsGameplayEventHandler_t cancelled_gameplay[] = {
    {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_cancel_penalty, handleCancelledPenalty}
};

// const: delivered_gameplay
// handle gameplayevent id `job.delivered`
const scsGameplayEventHandler_t delivered_gameplay[] = {
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_revenue, handleDeliveredRevenue},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_earned_xp, handleDeliveredEarnedXp},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_cargo_damage, handleDeliveredCargoDamage},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_distance_km, handleDeliveredDistanceKm},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_delivery_time, handleDeliveredDeliveryTime},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_auto_park_used, handleDeliveredAutoparkUsed},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_auto_load_used, handleDeliveredAutoloadUsed},

};

// const: fined_gameplay
// handle gameplayevent id `player.fined`
const scsGameplayEventHandler_t fined_gameplay[] = {
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_fine_offence, handleFinedFineOffence},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_fine_amount, handleFinedFineAmount}
};

// const: tollgate_gameplay
// handle gameplayevent id `player.tollgate.paid` 
const scsGameplayEventHandler_t tollgate_gameplay[] = {
    {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_pay_amount, handleTollgatePayAmount}
};

// const: ferry_gameplay
// handle gameplayevent id `player.use.ferry`
const scsGameplayEventHandler_t ferry_gameplay[] = {
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_pay_amount, handleFerryPayAmount},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_source_name, handleFerrySourceName},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_target_name, handleFerryTargetName},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_source_id, handleFerrySourceId},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_target_id, handleFerryTargetId}
};

// const: train_gameplay
// handle gameplayevent id `player.use.train`
const scsGameplayEventHandler_t train_gameplay[] = {
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_pay_amount, handleTrainPayAmount},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_source_name, handleTrainSourceName},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_target_name, handleTrainTargetName},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_source_id, handleTrainSourceId},
        {SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_target_id, handleTrainTargetId}
};

const int length_gameplays[] = {
    sizeof cancelled_gameplay / sizeof*cancelled_gameplay,
    sizeof delivered_gameplay / sizeof*delivered_gameplay,
    sizeof fined_gameplay / sizeof*fined_gameplay,
    sizeof tollgate_gameplay / sizeof*tollgate_gameplay,
    sizeof ferry_gameplay / sizeof*ferry_gameplay,
    sizeof train_gameplay / sizeof*train_gameplay
};
#pragma endregion Contains all handler arrays


// Function: handleGpe
// brings the config attributes to the correct function
bool handleGpe(const scs_named_value_t* info, const gameplayType type) {
    const scsGameplayEventHandler_t* gameplay = nullptr;
    switch (type) {
    case cancelled:
        gameplay = cancelled_gameplay;
        set_job_values_zero();
        break;
    case delivered:
        gameplay = delivered_gameplay;
         set_job_values_zero();
        break;
    case fined:
        gameplay = fined_gameplay;
        break;
    case tollgate:
        gameplay = tollgate_gameplay;
        break;
    case ferry:
        gameplay = ferry_gameplay;
        break;
    case train:
        gameplay = train_gameplay;
        break;
    default:
        // something went wrong
        return false;
    }
   
    for (auto index = 0; index < length_gameplays[type]; index++) {
        if (strcmp(gameplay->id, info->name) == 0) {
            if (telem_ptr) {
                // Equal ID's; then handle this configuration
                if (gameplay->handle)
                    gameplay->handle(info);
            }
            return true;
        }
        ++gameplay;
    }
    return false;
}


#pragma region handleCancelled
// Function: handleCancelledPenalty
// Event called when job is cancelled
// The penalty for cancelling the job in native game currency. (Can be 0)
scsGameplayEventHandle(Cancelled, Penalty) { 
    telem_ptr->gameplay_ll.jobCancelledPenalty = current->value.value_s64.value;
}

#pragma endregion All handler of the id job.cancelled


#pragma region handleDelivered
// Events called when job is delivered.

// Function: handleDeliveredRevenue
// The job revenue in native game currency.
scsGameplayEventHandle(Delivered, Revenue) {
    telem_ptr->gameplay_ll.jobDeliveredRevenue = current->value.value_s64.value;
}

// Function: handleDeliveredEarnedXp
// How much XP player received for the job.
scsGameplayEventHandle(Delivered, EarnedXp) {
    telem_ptr->gameplay_i.jobDeliveredEarnedXp = current->value.value_s32.value;
}

// Function: handleDeliveredCargoDamage
// Total cargo damage. (Range <0.0, 1.0>)
scsGameplayEventHandle(Delivered, CargoDamage) {
    telem_ptr->gameplay_f.jobDeliveredCargoDamage = current->value.value_float.value;
}

// Function: handleDeliveredDistanceKm
// The real distance in km on the job.
scsGameplayEventHandle(Delivered, DistanceKm) {
    telem_ptr->gameplay_f.jobDeliveredDistanceKm = current->value.value_float.value;
}

// Function: handleDeliveredDeliveryTime
// Total time spend on the job in game minutes.
scsGameplayEventHandle(Delivered, DeliveryTime) {
    telem_ptr->gameplay_ui.jobDeliveredDeliveryTime = current->value.value_u32.value;
}

// Function: handleDeliveredAutoparkUsed
// Was auto parking used on this job?
scsGameplayEventHandle(Delivered, AutoparkUsed) {
    telem_ptr->gameplay_b.jobDeliveredAutoparkUsed = current->value.value_bool.value;
}

// Function: handleDeliveredAutoloadUsed
// Was auto loading used on this job? (always @c true for non cargo market jobs)
scsGameplayEventHandle(Delivered, AutoloadUsed) {
    telem_ptr->gameplay_b.jobDeliveredAutoloadUsed = current->value.value_bool.value;
}

#pragma endregion All handler of the id job.delivered


#pragma region handleFined
// Events called when player gets fined.

// Function: handleFinedFineOffence
// Fine offence type
scsGameplayEventHandle(Fined, FineOffence) {
    strncpy(telem_ptr->gameplay_s.fineOffence, current->value.value_string.value, 32);
}

// Function: handleFinedFineAmount
// Fine offence amount in native game currency.
scsGameplayEventHandle(Fined, FineAmount) {
    telem_ptr->gameplay_ll.fineAmount = current->value.value_s64.value;
}


#pragma endregion All handler of the id player.fined


#pragma region handleTollgate
// Event called when player pays for a tollgate.

// Function: handleTollgatePayAmount
// How much player was charged for this action (in native game currency)
scsGameplayEventHandle(Tollgate, PayAmount) {
    telem_ptr->gameplay_ll.tollgatePayAmount = current->value.value_s64.value;
}


#pragma endregion All handler of the id player.tollgate.paid

#pragma region handleFerry
// Events called when player uses a ferry.

// Function: handleFerryPayAmount
// How much player was charged for this action (in native game currency)
scsGameplayEventHandle(Ferry, PayAmount) {
    telem_ptr->gameplay_ll.ferryPayAmount = current->value.value_s64.value;
}

// Function: handleFerrySourceName
// The name of the transportation source.
scsGameplayEventHandle(Ferry, SourceName) {
    strncpy(telem_ptr->gameplay_s.ferrySourceName, current->value.value_string.value, stringsize);
}

// Function: handleFerryTargetName
// The name of the transportation target.
scsGameplayEventHandle(Ferry, TargetName) {
    strncpy(telem_ptr->gameplay_s.ferryTargetName, current->value.value_string.value, stringsize);
}

// Function: handleFerrySourceId
// The id of the transportation source.
scsGameplayEventHandle(Ferry, SourceId) {
    strncpy(telem_ptr->gameplay_s.ferrySourceId, current->value.value_string.value, stringsize);
}

// Function: handleFerryTargetId
// The id of the transportation target.
scsGameplayEventHandle(Ferry, TargetId) {
    strncpy(telem_ptr->gameplay_s.ferryTargetId, current->value.value_string.value, stringsize);
}


#pragma endregion All handler of the id player.use.ferry

#pragma region handleTrain
// Events called when player uses a train.

// Function: handleTrainPayAmount
// How much player was charged for this action (in native game currency)
scsGameplayEventHandle(Train, PayAmount) {
    telem_ptr->gameplay_ll.trainPayAmount = current->value.value_s64.value;
}

// Function: handleTrainSourceName
// The name of the transportation source.
scsGameplayEventHandle(Train, SourceName) {
    strncpy(telem_ptr->gameplay_s.trainSourceName, current->value.value_string.value, stringsize);
}

// Function: handleTrainTargetName
// The name of the transportation target.
scsGameplayEventHandle(Train, TargetName) {
    strncpy(telem_ptr->gameplay_s.trainTargetName, current->value.value_string.value, stringsize);
}

// Function: handleTrainSourceId
// The id of the transportation source.
scsGameplayEventHandle(Train, SourceId) {
    strncpy(telem_ptr->gameplay_s.trainSourceId, current->value.value_string.value, stringsize);
}

// Function: handleTrainTargetId
// The id of the transportation target.
scsGameplayEventHandle(Train, TargetId) {
    strncpy(telem_ptr->gameplay_s.trainTargetId, current->value.value_string.value, stringsize);
}


#pragma endregion All handler of the id player.use.ferry
