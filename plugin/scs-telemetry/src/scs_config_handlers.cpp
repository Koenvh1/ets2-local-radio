#include "scs_config_handlers.hpp"

#include <cstring>

// Plug-in
#include "log.hpp"
#include "scs-telemetry-common.hpp"
#include "sharedmemory.hpp"

extern SharedMemory* telem_mem;
extern scsTelemetryMap_t* telem_ptr;
#pragma region scsConfigHandler_t[]

// const: substances_config
// all handles with config id `substances`
const scsConfigHandler_t substances_config[] = {
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_id, handleSubstancesId}};

// const: controls_config
// all handles with config id `controls`
const scsConfigHandler_t controls_config[] = {
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_shifter_type, handleControlsShifterType}};

// const: hshifter_config
// all handles with config id `hshifter`
const scsConfigHandler_t hshifter_config[] = {
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_selector_count,
     handleHShifterSelectorCount},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_slot_gear, handleHShifterResulting},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_slot_handle_position,
     handleHShifterPosition},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_slot_selectors, handleHShifterBitmask}};

// const: truck_config
// all handles with config id `truck`
const scsConfigHandler_t truck_config[] = {
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_brand_id, handleTruckBrandId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_brand, handleTruckBrand},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_id, handleTruckId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_name, handleTruckName},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_fuel_capacity, handleTruckFuelCapacity},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_fuel_warning_factor,
     handleTruckFuelWarningFactor},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_adblue_capacity, handleTruckAdblueCapacity},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_adblue_warning_factor,
     handleTruckAdblueWarningFactor},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_air_pressure_warning,
     handleTruckAirPressureWarning},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_air_pressure_emergency,
     handleTruckAirPressureEmergency},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_oil_pressure_warning,
     handleTruckOilPressureWarning},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_water_temperature_warning,
     handleTruckWaterTemperatureWarning},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_battery_voltage_warning,
     handleTruckBatteryVoltageWarning},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_rpm_limit, handleTruckRpmLimit},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_forward_gear_count, handleTruckFGearCount},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_reverse_gear_count, handleTruckRGearCount},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_retarder_step_count,
     handleTruckRetarderStepCount},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_cabin_position, handleTruckCabinPosition},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_head_position, handleTruckHeadPosition},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_hook_position, handleTruckHookPosition},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_count, handleTruckWheelCount},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_position, handleTruckWheelPosition},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_steerable, handleTruckWheelSteerable},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_simulated, handleTruckWheelSimulated},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_radius, handleTruckWheelRadius},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_powered, handleTruckWheelPowered},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_liftable, handleTruckWheelLiftable},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_differential_ratio,
     handleTruckGearDifferential},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_forward_ratio, handleTruckGearForwardRatio},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_reverse_ratio, handleTruckGearReverseRatio},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_license_plate, handleTruckLicensePlate},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_license_plate_country,
     handleTruckLicensePlateCountry},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_license_plate_country_id,
     handleTruckLicensePlateCountryId}};

// const: trailer_config
// all handles with config id `trailer`
const scsConfigHandler_t trailer_config[] = {
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_id, handleTrailerId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_cargo_accessory_id,
     handleTrailerCargoAccessoryId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_hook_position, handleTrailerHookPosition},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_count, handleTrailerWheelCount},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_position, handleTrailerWheelOffset},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_steerable,
     handleTrailerWheelSteerable},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_simulated,
     handleTrailerWheelSimulated},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_radius, handleTrailerWheelRadius},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_powered, handleTrailerWheelPowered},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_wheel_liftable, handleTrailerWheelLiftable},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_body_type, handleTrailerBodyType},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_brand_id, handleTrailerBrandId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_brand, handleTrailerBrand},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_name, handleTrailerName},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_chain_type, handleTrailerChainType},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_license_plate, handleTrailerLicensePlate},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_license_plate_country,
     handleTrailerLicensePlateCountry},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_license_plate_country_id,
     handleTrailerLicensePlateCountryId}};

// const: job_config
// all handles with config id `job`
const scsConfigHandler_t job_config[] = {
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_cargo_id, handleJobCargoId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_cargo, handleJobCargo},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_cargo_mass, handleJobCargoMass},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_destination_city_id, handleJobCityDstId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_destination_city, handleJobCityDst},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_source_city_id, handleJobCitySrcId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_source_city, handleJobCitySrc},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_destination_company_id, handleJobCompDstId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_destination_company, handleJobCompDst},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_source_company_id, handleJobCompSrcId},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_source_company, handleJobCompSrc},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_income, handleJobIncome},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_delivery_time, handleJobDeliveryTime},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_is_cargo_loaded, handleJobIsCargoLoaded},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_job_market, handleJobJobMarket},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_special_job, handleJobSpecialJob},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_cargo_unit_count, handleJobUnitCount},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_cargo_unit_mass, handleJobUnitMass},
    {SCS_TELEMETRY_CONFIG_ATTRIBUTE_planned_distance_km,
     handleJobPlannedDistanceKm}};

// const: length_configs
// contains the length of the handle config arrays
const int length_configs[] = {
    sizeof substances_config / sizeof *substances_config,
    sizeof controls_config / sizeof *controls_config,
    sizeof hshifter_config / sizeof *hshifter_config,
    sizeof truck_config / sizeof *truck_config,
    sizeof trailer_config / sizeof *trailer_config,
    sizeof job_config / sizeof *job_config};
#pragma endregion Contains all handler arrays

/* Function: handleCfg

    call the correct handle of the scs_config event

    Parameters:

        info - scs_config event value + name
        type - type (id) of the scs_config event, <configType>
        trailer_id - trailer id if needed to handle the event (0-9)

    Returns:

        true if event was handled

*/
bool handleCfg(const scs_named_value_t* info, const configType type,
               const unsigned int trailer_id) {
  const scsConfigHandler_t* configs = nullptr;
  switch (type) {
    case substances:
      configs = substances_config;
      break;
    case controls:
      configs = controls_config;
      break;
    case hshifter:
      configs = hshifter_config;
      break;
    case truck:
      configs = truck_config;
      break;
    case trailer:
      configs = trailer_config;
      break;
    case job:
      configs = job_config;
      break;
    default:
      return false;
  }

  for (auto index = 0; index < length_configs[type]; index++) {
    if (strcmp(configs->id, info->name) == 0) {
      if (telem_ptr) {
        // Equal ID's; then handle this configuration
        if (configs->handle)
          // TODO: FIND A BETTER WAY TO HANDLE THE TRAILER ID
          configs->handle(info, trailer_id);
      }
      return true;
    }
    ++configs;
  }
  return false;
}

#pragma region handleSubstances
/* Function: handleSubstancesId

    Handle the Substances Id and write it to the space in memory.
    It write up to <SUBSTANCE_SIZE> substances into the memory

        See Also:

        <scsConfigHandle>
*/
scsConfigHandle(Substances, Id) {
  if (current->index < SUBSTANCE_SIZE) {
    strncpy(telem_ptr->substances.substance[current->index],
            current->value.value_string.value, stringsize);
  }
}

#pragma endregion All handler of the id substances

#pragma region handleControls
// Function: handleControlsShifterType
// handle the Controls ShifterType and write it to the memory
scsConfigHandle(Controls, ShifterType) {
  strncpy(telem_ptr->config_s.shifterType, current->value.value_string.value,
          16);
}
#pragma endregion All handler of the id controls

#pragma region handleHShifter
// Function: handleHShifterSelectorCount
// handle the HShifter SelectorCount and write it to the memory
scsConfigHandle(HShifter, SelectorCount) {
  telem_ptr->config_ui.selectorCount = current->value.value_u32.value;
}

// Function: handeHShifterResulting
// handle the HSifter Resulting and write it to the memory
scsConfigHandle(HShifter, Resulting) {
  const auto gear = current->index;
  const auto value = current->value.value_s32.value;

  if (gear < 32) {
    telem_ptr->truck_i.hshifterResulting[gear] = value;
  }
}

scsConfigHandle(HShifter, Position) {
  const auto gear = current->index;
  const auto value = current->value.value_u32.value;

  if (gear < 32) {
    telem_ptr->truck_ui.hshifterPosition[gear] = value;
  }
}

scsConfigHandle(HShifter, Bitmask) {
  const auto gear = current->index;
  const auto value = current->value.value_u32.value;

  if (gear < 32) {
    telem_ptr->truck_ui.hshifterBitmask[gear] = value;
  }
}
#pragma endregion All handler of the id hshifter

#pragma region handleTruck
scsConfigHandle(Truck, BrandId) {
  strncpy(telem_ptr->config_s.truckBrandId, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Truck, Brand) {
  strncpy(telem_ptr->config_s.truckBrand, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Truck, Id) {
  strncpy(telem_ptr->config_s.truckId, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Truck, Name) {
  strncpy(telem_ptr->config_s.truckName, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Truck, FuelCapacity) {
  telem_ptr->config_f.fuelCapacity = current->value.value_float.value;
}

scsConfigHandle(Truck, FuelWarningFactor) {
  telem_ptr->config_f.fuelWarningFactor = current->value.value_float.value;
}

scsConfigHandle(Truck, AdblueCapacity) {
  telem_ptr->config_f.adblueCapacity = current->value.value_float.value;
}

scsConfigHandle(Truck, AdblueWarningFactor) {
  telem_ptr->config_f.adblueWarningFactor = current->value.value_float.value;
}

scsConfigHandle(Truck, AirPressureWarning) {
  telem_ptr->config_f.airPressureWarning = current->value.value_float.value;
}

scsConfigHandle(Truck, AirPressureEmergency) {
  telem_ptr->config_f.airPressurEmergency = current->value.value_float.value;
}

scsConfigHandle(Truck, OilPressureWarning) {
  telem_ptr->config_f.oilPressureWarning = current->value.value_float.value;
}

scsConfigHandle(Truck, WaterTemperatureWarning) {
  telem_ptr->config_f.waterTemperatureWarning =
      current->value.value_float.value;
}

scsConfigHandle(Truck, BatteryVoltageWarning) {
  telem_ptr->config_f.batteryVoltageWarning = current->value.value_float.value;
}

scsConfigHandle(Truck, RpmLimit) {
  telem_ptr->config_f.engineRpmMax = current->value.value_float.value;
}

scsConfigHandle(Truck, FGearCount) {
  telem_ptr->config_ui.gears = current->value.value_u32.value;
}

scsConfigHandle(Truck, RGearCount) {
  telem_ptr->config_ui.gears_reverse = current->value.value_u32.value;
}

scsConfigHandle(Truck, RetarderStepCount) {
  telem_ptr->config_ui.retarderStepCount = current->value.value_u32.value;
}

scsConfigHandle(Truck, CabinPosition) {
  telem_ptr->config_fv.cabinPositionX = current->value.value_fvector.x;
  telem_ptr->config_fv.cabinPositionY = current->value.value_fvector.y;
  telem_ptr->config_fv.cabinPositionZ = current->value.value_fvector.z;
}

scsConfigHandle(Truck, HeadPosition) {
  telem_ptr->config_fv.headPositionX = current->value.value_fvector.x;
  telem_ptr->config_fv.headPositionY = current->value.value_fvector.y;
  telem_ptr->config_fv.headPositionZ = current->value.value_fvector.z;
}

scsConfigHandle(Truck, HookPosition) {
  telem_ptr->config_fv.truckHookPositionX = current->value.value_fvector.x;
  telem_ptr->config_fv.truckHookPositionY = current->value.value_fvector.y;
  telem_ptr->config_fv.truckHookPositionZ = current->value.value_fvector.z;
}

scsConfigHandle(Truck, WheelCount) {
  telem_ptr->config_ui.truckWheelCount = current->value.value_u32.value;
}

scsConfigHandle(Truck, WheelPosition) {
  const auto position = current->index;
  const auto ratio = current->value.value_fvector;

  if (position < WHEEL_SIZE) {
    telem_ptr->config_fv.truckWheelPositionX[position] = ratio.x;
    telem_ptr->config_fv.truckWheelPositionY[position] = ratio.y;
    telem_ptr->config_fv.truckWheelPositionZ[position] = ratio.z;
  }
}

scsConfigHandle(Truck, WheelSteerable) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->config_b.truckWheelSteerable[position] = ratio.value;
  }
}

scsConfigHandle(Truck, WheelSimulated) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->config_b.truckWheelSimulated[position] = ratio.value;
  }
}

scsConfigHandle(Truck, WheelRadius) {
  const auto position = current->index;
  const auto ratio = current->value.value_float;

  if (position < WHEEL_SIZE) {
    telem_ptr->config_f.truckWheelRadius[position] = ratio.value;
  }
}

scsConfigHandle(Truck, WheelPowered) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->config_b.truckWheelPowered[position] = ratio.value;
  }
}

scsConfigHandle(Truck, WheelLiftable) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->config_b.truckWheelLiftable[position] = ratio.value;
  }
}

scsConfigHandle(Truck, GearDifferential) {
  telem_ptr->config_f.gearDifferential = current->value.value_float.value;
}

scsConfigHandle(Truck, GearForwardRatio) {
  const auto gear = current->index;
  const auto ratio = current->value.value_float.value;

  if (gear < 24) {
    telem_ptr->config_f.gearRatiosForward[gear] = ratio;
  }
}

scsConfigHandle(Truck, GearReverseRatio) {
  const auto gear = current->index;
  const auto ratio = current->value.value_float.value;

  if (gear < 8) {
    telem_ptr->config_f.gearRatiosReverse[gear] = ratio;
  }
}

scsConfigHandle(Truck, LicensePlate) {
  strncpy(telem_ptr->config_s.truckLicensePlate,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Truck, LicensePlateCountry) {
  strncpy(telem_ptr->config_s.truckLicensePlateCountry,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Truck, LicensePlateCountryId) {
  strncpy(telem_ptr->config_s.truckLicensePlateCountryId,
          current->value.value_string.value, stringsize);
}
#pragma endregion All handler of the id truck

#pragma region handleTrailer
scsConfigHandle(Trailer, Id) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.id,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, CargoAccessoryId) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.cargoAcessoryId,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, HookPosition) {
  telem_ptr->trailer.trailer[trailer_id].con_fv.hookPositionX =
      current->value.value_fvector.x;
  telem_ptr->trailer.trailer[trailer_id].con_fv.hookPositionY =
      current->value.value_fvector.y;
  telem_ptr->trailer.trailer[trailer_id].con_fv.hookPositionZ =
      current->value.value_fvector.z;
}

scsConfigHandle(Trailer, WheelCount) {
  telem_ptr->trailer.trailer[trailer_id].con_ui.wheelCount =
      current->value.value_u32.value;
}

scsConfigHandle(Trailer, WheelOffset) {
  // seems to be WheelPosition
  const auto position = current->index;
  const auto ratio = current->value.value_fvector;
  if (position < WHEEL_SIZE) {
    telem_ptr->trailer.trailer[trailer_id].con_fv.wheelPositionX[position] =
        ratio.x;
    telem_ptr->trailer.trailer[trailer_id].con_fv.wheelPositionY[position] =
        ratio.y;
    telem_ptr->trailer.trailer[trailer_id].con_fv.wheelPositionZ[position] =
        ratio.z;
  }
}

scsConfigHandle(Trailer, WheelSteerable) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->trailer.trailer[trailer_id].con_b.wheelSteerable[position] =
        ratio.value;
  }
}

scsConfigHandle(Trailer, WheelSimulated) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->trailer.trailer[trailer_id].con_b.wheelSimulated[position] =
        ratio.value;
  }
}

scsConfigHandle(Trailer, WheelRadius) {
  const auto position = current->index;
  const auto ratio = current->value.value_float;

  if (position < WHEEL_SIZE) {
    telem_ptr->trailer.trailer[trailer_id].con_f.wheelRadius[position] =
        ratio.value;
  }
}

scsConfigHandle(Trailer, WheelPowered) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->trailer.trailer[trailer_id].con_b.wheelPowered[position] =
        ratio.value;
  }
}

scsConfigHandle(Trailer, WheelLiftable) {
  const auto position = current->index;
  const auto ratio = current->value.value_bool;

  if (position < WHEEL_SIZE) {
    telem_ptr->trailer.trailer[trailer_id].con_b.wheelLiftable[position] =
        ratio.value;
  }
}

scsConfigHandle(Trailer, BodyType) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.bodyType,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, BrandId) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.brandId,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, Brand) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.brand,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, Name) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.name,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, ChainType) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.chainType,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, LicensePlate) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.licensePlate,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, LicensePlateCountry) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.licensePlateCountry,
          current->value.value_string.value, stringsize);
}

scsConfigHandle(Trailer, LicensePlateCountryId) {
  strncpy(telem_ptr->trailer.trailer[trailer_id].con_s.licensePlateCountryId,
          current->value.value_string.value, stringsize);
}

#pragma endregion All handler for the id trailer

#pragma region handleJob
scsConfigHandle(Job, CargoId) {
  strncpy(telem_ptr->config_s.cargoId, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, Cargo) {
  strncpy(telem_ptr->config_s.cargo, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CargoMass) {
  telem_ptr->config_f.cargoMass = current->value.value_float.value;
}

scsConfigHandle(Job, CityDstId) {
  strncpy(telem_ptr->config_s.cityDstId, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CityDst) {
  strncpy(telem_ptr->config_s.cityDst, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CitySrcId) {
  strncpy(telem_ptr->config_s.citySrcId, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CitySrc) {
  strncpy(telem_ptr->config_s.citySrc, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CompDstId) {
  strncpy(telem_ptr->config_s.compDstId, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CompDst) {
  strncpy(telem_ptr->config_s.compDst, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CompSrcId) {
  strncpy(telem_ptr->config_s.compSrcId, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, CompSrc) {
  strncpy(telem_ptr->config_s.compSrc, current->value.value_string.value,
          stringsize);
}

scsConfigHandle(Job, Income) {
  telem_ptr->config_ull.jobIncome = current->value.value_u64.value;
}

scsConfigHandle(Job, DeliveryTime) {
  telem_ptr->config_ui.time_abs_delivery = current->value.value_u32.value;
}

scsConfigHandle(Job, IsCargoLoaded) {
  telem_ptr->config_b.isCargoLoaded = current->value.value_bool.value;
}

scsConfigHandle(Job, JobMarket) {
  strncpy(telem_ptr->config_s.jobMarket, current->value.value_string.value, 20);
}

scsConfigHandle(Job, SpecialJob) {
  telem_ptr->config_b.specialJob = current->value.value_bool.value;
}

scsConfigHandle(Job, UnitCount) {
  telem_ptr->config_ui.unitCount = current->value.value_u32.value;
}

scsConfigHandle(Job, UnitMass) {
  telem_ptr->config_f.unitMass = current->value.value_float.value;
}

scsConfigHandle(Job, PlannedDistanceKm) {
  telem_ptr->config_ui.plannedDistanceKm = current->value.value_u32.value;
}
#pragma endregion All handler of the id job
