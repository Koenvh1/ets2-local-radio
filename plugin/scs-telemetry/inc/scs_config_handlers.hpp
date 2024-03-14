


#ifndef SCS_CFG_HANDLERS_H
#define SCS_CFG_HANDLERS_H

// SDK
#include "scssdk_telemetry.h"
#include "eurotrucks2/scssdk_eut2.h"
#include "eurotrucks2/scssdk_telemetry_eut2.h"
#include "scs-telemetry-common.hpp"
typedef struct scsConfigHandler_s
{
	char const *id;
	void (*handle) (const scs_named_value_t* current, const unsigned int trailer_id);
} scsConfigHandler_t;

/*  define: scsConfigHandle
     
    Makro of the scs_config event handle functions
    Created with an id and attribute value to create the name `handle##id##attribute`

    Parameter:
   
        current - the scs_config event that is handled
        trailer_id - trailer id if needed to handle the event (0-9)    
 
 */
#define scsConfigHandle(id, attribute) void handle##id##attribute (const scs_named_value_t* current, const unsigned int trailer_id  )

// Define prototypes for all the various handlers

// Substances
scsConfigHandle(Substances, Id);

// Controls
scsConfigHandle(Controls,ShifterType);

// HShifter
scsConfigHandle(HShifter, SelectorCount);
scsConfigHandle(HShifter, Resulting);
scsConfigHandle(HShifter, Position);
scsConfigHandle(HShifter, Bitmask);

// Truck
scsConfigHandle(Truck, BrandId);
scsConfigHandle(Truck, Brand);
scsConfigHandle(Truck, Id);
scsConfigHandle(Truck, Name);
scsConfigHandle(Truck, FuelCapacity);
scsConfigHandle(Truck, FuelWarningFactor);
scsConfigHandle(Truck, AdblueCapacity);
scsConfigHandle(Truck, AdblueWarningFactor);
scsConfigHandle(Truck, AirPressureWarning);
scsConfigHandle(Truck, AirPressureEmergency);
scsConfigHandle(Truck, OilPressureWarning);
scsConfigHandle(Truck, WaterTemperatureWarning);
scsConfigHandle(Truck, BatteryVoltageWarning);
scsConfigHandle(Truck, RpmLimit);
scsConfigHandle(Truck, FGearCount);
scsConfigHandle(Truck, RGearCount);
scsConfigHandle(Truck, RetarderStepCount);
scsConfigHandle(Truck, CabinPosition);
scsConfigHandle(Truck, HeadPosition);
scsConfigHandle(Truck, HookPosition);
scsConfigHandle(Truck, WheelCount);
scsConfigHandle(Truck, WheelPosition);
scsConfigHandle(Truck, WheelSteerable);
scsConfigHandle(Truck, WheelSimulated);
scsConfigHandle(Truck, WheelRadius);
scsConfigHandle(Truck, WheelPowered);
scsConfigHandle(Truck, WheelLiftable);
scsConfigHandle(Truck, GearDifferential);
scsConfigHandle(Truck, GearForwardRatio);
scsConfigHandle(Truck, GearReverseRatio);
scsConfigHandle(Truck, LicensePlate);
scsConfigHandle(Truck, LicensePlateCountry);
scsConfigHandle(Truck, LicensePlateCountryId);

// Trailer
scsConfigHandle(Trailer, Id);
scsConfigHandle(Trailer, CargoAccessoryId);
scsConfigHandle(Trailer, HookPosition);
scsConfigHandle(Trailer, WheelCount);
scsConfigHandle(Trailer, WheelOffset); // it is named offsets in the comment but that attribute doesn't exist so i think it's handled over position, but need to check this
scsConfigHandle(Trailer, WheelSteerable);
scsConfigHandle(Trailer, WheelSimulated);
scsConfigHandle(Trailer, WheelRadius);
scsConfigHandle(Trailer, WheelPowered);
scsConfigHandle(Trailer, WheelLiftable);
scsConfigHandle(Trailer, BodyType);
scsConfigHandle(Trailer, BrandId);
scsConfigHandle(Trailer, Brand);
scsConfigHandle(Trailer, Name);
scsConfigHandle(Trailer, ChainType);
scsConfigHandle(Trailer, LicensePlate);
scsConfigHandle(Trailer, LicensePlateCountry);
scsConfigHandle(Trailer, LicensePlateCountryId);


// Job
scsConfigHandle(Job, CargoId);
scsConfigHandle(Job, Cargo);
scsConfigHandle(Job, CargoMass);
scsConfigHandle(Job, CityDstId);
scsConfigHandle(Job, CityDst);
scsConfigHandle(Job, CitySrcId);
scsConfigHandle(Job, CitySrc);
scsConfigHandle(Job, CompDstId);
scsConfigHandle(Job, CompDst);
scsConfigHandle(Job, CompSrcId);
scsConfigHandle(Job, CompSrc);
scsConfigHandle(Job, Income);
scsConfigHandle(Job, DeliveryTime);
scsConfigHandle(Job, IsCargoLoaded);
scsConfigHandle(Job, JobMarket);
scsConfigHandle(Job, SpecialJob);
scsConfigHandle(Job, UnitCount);
scsConfigHandle(Job, UnitMass);
scsConfigHandle(Job, PlannedDistanceKm);

bool handleCfg(const scs_named_value_t* info,const configType type, const unsigned int trailer_id);
#endif