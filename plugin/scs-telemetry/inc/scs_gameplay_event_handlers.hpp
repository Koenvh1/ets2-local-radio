#ifndef SCS_GPE_HANDLERS_HPP
#define SCS_GPE_HANDLERS_HPP

// SDK
#include "scssdk_telemetry.h"
#include "eurotrucks2/scssdk_eut2.h"
#include "eurotrucks2/scssdk_telemetry_eut2.h"
#include "scs-telemetry-common.hpp"


typedef struct scsGameplayEventHandler_s
{
	char const *id;
	void (*handle) (const scs_named_value_t* current);
} scsGameplayEventHandler_t;

#define scsGameplayEventHandle(id, attribute) void handle##id##attribute (const scs_named_value_t* current)

// Define prototypes for all the various handlers

// Cancelled
scsGameplayEventHandle(Cancelled, Penalty);

// Delivered
scsGameplayEventHandle(Delivered, Revenue);
scsGameplayEventHandle(Delivered, EarnedXp);
scsGameplayEventHandle(Delivered, CargoDamage);
scsGameplayEventHandle(Delivered, DistanceKm);
scsGameplayEventHandle(Delivered, DeliveryTime);
scsGameplayEventHandle(Delivered, AutoparkUsed);
scsGameplayEventHandle(Delivered, AutoloadUsed);

// Fined
scsGameplayEventHandle(Fined, FineOffence);
scsGameplayEventHandle(Fined, FineAmount);

// Tollgate
scsGameplayEventHandle(Tollgate, PayAmount);

// Ferry
scsGameplayEventHandle(Ferry, PayAmount);
scsGameplayEventHandle(Ferry, SourceName);
scsGameplayEventHandle(Ferry, TargetName);
scsGameplayEventHandle(Ferry, SourceId);
scsGameplayEventHandle(Ferry, TargetId);


// Train
scsGameplayEventHandle(Train, PayAmount);
scsGameplayEventHandle(Train, SourceName);
scsGameplayEventHandle(Train, TargetName);
scsGameplayEventHandle(Train, SourceId);
scsGameplayEventHandle(Train, TargetId);


bool handleGpe(const scs_named_value_t* info,const gameplayType type );

#endif