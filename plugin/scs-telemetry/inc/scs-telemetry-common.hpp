#ifndef SCS_TELEMETRY_COMMON_HPP
#define SCS_TELEMETRY_COMMON_HPP

// This file contains "Common definitions" for this ETS2 telemetry plug-in.
// This includes:
// - Debug logging detail options
// - Shared memory map struct layout
// - [..]

#define PLUGIN_REVID					12

#define ETS2                            1
#define ATS                             2
#define UnknownGame                     0

#define ETS2_PLUGIN_LOGGING_ON				0
#define ETS2_PLUGIN_LOGGING_SHAREDMEMORY	0
#define ETS2_PLUGIN_FILENAME_PREFIX "C:\ets2telem_"

#if ETS2_PLUGIN_LOGGING_ON == 1
#define SDK_ENABLE_LOGGING
#endif

#include "scssdk.h"
#define SCS_PLUGIN_MMF_NAME TEXT("Local\\ETS2LocalRadio")
#define SCS_PLUGIN_MMF_SIZE (32*1024)
/**
 * \brief string size for all strings (most of them) the amount of fields in the shared memory field
 */
#define stringsize  64

 /**
  * \brief Actual used wheel size of the SDK   not the amount of fields in the shared memory field
  */
#define WHEEL_SIZE 14

  // macro: SUBSTANCE_SIZE
  // The maximum number of substances that are saved to the memory
#define SUBSTANCE_SIZE 25

bool check_min_version(unsigned const int min_ets2, unsigned const int min_ats);
bool check_max_version(unsigned const int min_ets2, unsigned const int min_ats);
enum configType { substances, controls, hshifter, truck, trailer, job };
enum gameplayType { cancelled, delivered, fined, tollgate, ferry, train };
void log_line(scs_log_type_t type, const char* text, ...);
void log_line(const char* text, ...);

typedef struct scsTrailer_s { // Size: 1560
	//----- START OF FIRST ZONE AT OFFSET 0 -----//
	struct {
		bool wheelSteerable[16];
		bool wheelSimulated[16];
		bool wheelPowered[16];
		bool wheelLiftable[16];
	}con_b;
	struct {
		bool wheelOnGround[16];
		bool attached;
	}com_b;
	char buffer_b[3];
	//----- END OF FIRST ZONE AT OFFSET 83 -----//
	//----- START OF SECOND ZONE AT OFFSET 84 -----//
	struct {
		unsigned int wheelSubstance[16];
	}com_ui;
	struct {
		unsigned int wheelCount;
	}con_ui;
	//----- END OF SECOND ZONE AT OFFSET 151 -----//
	//----- START OF THIRD ZONE AT OFFSET 152 -----//
	struct {
		float cargoDamage;
		float wearChassis;
		float wearWheels;
		float wearBody;
		float wheelSuspDeflection[16];
		float wheelVelocity[16];
		float wheelSteering[16];
		float wheelRotation[16];
		float wheelLift[16];
		float wheelLiftOffset[16];
	}com_f;
	struct {
		float wheelRadius[16];
	}con_f;
	//----- END OF THIRD ZONE AT OFFSET 615 -----//
		//----- START OF 4TH ZONE AT OFFSET 616 -----//
	struct {
		float linearVelocityX;
		float linearVelocityY;
		float linearVelocityZ;
		float angularVelocityX;
		float angularVelocityY;
		float angularVelocityZ;
		float linearAccelerationX;
		float linearAccelerationY;
		float linearAccelerationZ;
		float angularAccelerationX;
		float angularAccelerationY;
		float angularAccelerationZ;
	}com_fv;
	struct {
		float hookPositionX;
		float hookPositionY;
		float hookPositionZ;
		float wheelPositionX[16];
		float wheelPositionY[16];
		float wheelPositionZ[16];
	}con_fv;
    char buffer_fv[4];
	//----- END OF 4TH ZONE AT OFFSET 871 -----//
		//----- START OF 5TH ZONE AT OFFSET 872 -----//
	struct {
		double worldX;
		double worldY;
		double worldZ;
		double rotationX;
		double rotationY;
		double rotationZ;
	}com_dp;

	//----- END OF 5TH ZONE AT OFFSET 919 -----//
		//----- START OF 6TH ZONE AT OFFSET 920 -----//
	struct {
		char id[stringsize];
		char cargoAcessoryId[stringsize];
		char bodyType[stringsize];
		char brandId[stringsize];
		char brand[stringsize];
		char name[stringsize];
		char chainType[stringsize];
		char licensePlate[stringsize];
		char licensePlateCountry[stringsize];
		char licensePlateCountryId[stringsize];
	}con_s;
	//----- END OF 6TH ZONE AT OFFSET 1559 -----//
}scsTrailer_t;

/**
   *  \brief Telemetry object
   *
   * instead to use a clear object like that in c# we want to create this one easy to parse and modifyable
   *
   * Look in the c header of the sdk for more desription or in the c# description
   *
   * Arrays must be set here and have all local parameter for their size
   */
typedef struct scsTelemetryMap_s
{
	//----- START OF FIRST ZONE AT OFFSET 0 -----//
	// Staring with values needed to handle the data
	// display if game / sdk runs
	bool sdkActive;
	char placeHolder[3];
	// check if the game and the telemetry is paused
	bool paused;
	char placeHolder2[3];

	// not the game time, only a timestamp. Used to update the values on the other site of the shared memory
	unsigned long long time;
	unsigned long long simulatedTime;
	unsigned long long renderTime;
	long long multiplayerTimeOffset;

	//----- END OF FIRST ZONE AT OFFSET 39 -----//in

	//----- START OF SECOND ZONE AT OFFSET 40 -----//
	// The Secon zone contains unsigned integers and it sorted in sub structures

	// Contains Game independent values and plugin version
	struct
	{
		// Telemetry Plugin Version
		unsigned int telemetry_plugin_revision;
		// Game major version
		unsigned int version_major;
		// Game minor version
		unsigned int version_minor;
		// Game identifier
		unsigned int game; // actually 0 for unknown,1 for ets2 and 2 for ats
		// Game telemetry version major
		unsigned int telemetry_version_game_major;
		// Game telemetry version minor
		unsigned int telemetry_version_game_minor;
	} scs_values;

	// Contains common unsigned integers
	struct {
		// In game time in minutes
		unsigned int time_abs;
	}common_ui;

	// Contains config unsigned integers
	struct {
		unsigned int gears;
		unsigned int gears_reverse;
		unsigned int retarderStepCount;
		unsigned int truckWheelCount;
		unsigned int selectorCount;
		unsigned int time_abs_delivery;
		unsigned int maxTrailerCount;
		unsigned int unitCount;
		unsigned int plannedDistanceKm;
	}config_ui;

	// Contains trailer/truck channel unsigned integers
	struct {
		unsigned int shifterSlot;
		unsigned int retarderBrake;
		unsigned int lightsAuxFront;
		unsigned int lightsAuxRoof;
		unsigned int truck_wheelSubstance[16];
		unsigned int hshifterPosition[32];
		unsigned int hshifterBitmask[32];
	}truck_ui;

	struct {
		unsigned int jobDeliveredDeliveryTime;
		unsigned int jobStartingTime;
		unsigned int jobFinishedTime;
	}gameplay_ui;
	char buffer_ui[48];
	//----- END OF SECOND ZONE AT OFFSET 499 -----//

	//----- START OF Third ZONE AT OFFSET 500 -----//
	// The third zone contains integers and is sorted in sub structures

	struct {
		int restStop;
	}common_i;

	struct {
		int gear;
		int gearDashboard;
		int hshifterResulting[32];
	}truck_i;

	struct {
		int jobDeliveredEarnedXp;
	}gameplay_i;

	char buffer_i[56];
	//----- END OF third ZONE AT OFFSET 699 -----//

	//----- START OF FOURTH ZONE AT OFFSET 700 -----//
	// The fourth zone contains floats and is sorted in sub structures

	struct {
		float scale;
	}common_f;

	struct {
		float fuelCapacity;
		float fuelWarningFactor;
		float adblueCapacity;
		float adblueWarningFactor;
		float airPressureWarning;
		float airPressurEmergency;
		float oilPressureWarning;
		float waterTemperatureWarning;
		float batteryVoltageWarning;
		float engineRpmMax;
		float gearDifferential;
		float cargoMass;
		float truckWheelRadius[16];
		float gearRatiosForward[24];
		float gearRatiosReverse[8];
		float unitMass;
	}config_f;

	struct {
		float speed;
		float engineRpm;
		float userSteer;
		float userThrottle;
		float userBrake;
		float userClutch;
		float gameSteer;
		float gameThrottle;
		float gameBrake;
		float gameClutch;
		float cruiseControlSpeed;
		float airPressure;
		float brakeTemperature;
		float fuel;
		float fuelAvgConsumption;
		float fuelRange;
		float adblue;
		float oilPressure;
		float oilTemperature;
		float waterTemperature;
		float batteryVoltage;
		float lightsDashboard;
		float wearEngine;
		float wearTransmission;
		float wearCabin;
		float wearChassis;
		float wearWheels;
		float truckOdometer;
		float routeDistance;
		float routeTime;
		float speedLimit;
		float truck_wheelSuspDeflection[16];
		float truck_wheelVelocity[16];
		float truck_wheelSteering[16];
		float truck_wheelRotation[16];
		float truck_wheelLift[16];
		float truck_wheelLiftOffset[16];
	}truck_f;

	struct {
		float jobDeliveredCargoDamage;
		float jobDeliveredDistanceKm;
		float refuelAmount;
	}gameplay_f;

	struct {
		float cargoDamage;
	}job_f;
	char buffer_f[28];
	//----- END OF FOURTH ZONE AT OFFSET 1499 -----//

	//----- START OF FIFTH ZONE AT OFFSET 1500 -----//
	// The fifth zone contains bool and is sorted in sub structures

	struct {
		bool truckWheelSteerable[16];
		bool truckWheelSimulated[16];
		bool truckWheelPowered[16];
		bool truckWheelLiftable[16];

		bool isCargoLoaded;
		bool specialJob;
	}config_b;

	struct {
		bool parkBrake;
		bool motorBrake;
		bool airPressureWarning;
		bool airPressureEmergency;
		bool fuelWarning;
		bool adblueWarning;
		bool oilPressureWarning;
		bool waterTemperatureWarning;
		bool batteryVoltageWarning;
		bool electricEnabled;
		bool engineEnabled;
		bool wipers;
		bool blinkerLeftActive;
		bool blinkerRightActive;
		bool blinkerLeftOn;
		bool blinkerRightOn;
		bool lightsParking;
		bool lightsBeamLow;
		bool lightsBeamHigh;
		bool lightsBeacon;
		bool lightsBrake;
		bool lightsReverse;
		bool lightsHazard;
		bool cruiseControl; // special field not a sdk field
		bool truck_wheelOnGround[16];
		bool shifterToggle[2];
		bool differentialLock;
		bool liftAxle;
		bool liftAxleIndicator;
		bool trailerLiftAxle;
		bool trailerLiftAxleIndicator;
	}truck_b;

	struct
	{
		bool jobDeliveredAutoparkUsed;
		bool jobDeliveredAutoloadUsed;
	}gameplay_b;

	char buffer_b[25];
	//----- END OF FIFTH ZONE AT OFFSET 1639 -----//

	//----- START OF SIXTH ZONE AT OFFSET 1640 -----//
	// The sixth zone contains fvector and is sorted in sub structures

	struct {
		float cabinPositionX;
		float cabinPositionY;
		float cabinPositionZ;
		float headPositionX;
		float headPositionY;
		float headPositionZ;
		float truckHookPositionX;
		float truckHookPositionY;
		float truckHookPositionZ;
		float truckWheelPositionX[16];
		float truckWheelPositionY[16];
		float truckWheelPositionZ[16];
	}config_fv;
	struct {
		float lv_accelerationX;
		float lv_accelerationY;
		float lv_accelerationZ;
		float av_accelerationX;
		float av_accelerationY;
		float av_accelerationZ;
		float accelerationX;
		float accelerationY;
		float accelerationZ;
		float aa_accelerationX;
		float aa_accelerationY;
		float aa_accelerationZ;
		float cabinAVX;
		float cabinAVY;
		float cabinAVZ;
		float cabinAAX;
		float cabinAAY;
		float cabinAAZ;
	}truck_fv;
	char buffer_fv[60];
	//----- END OF SIXTH ZONE AT OFFSET 1999 -----//

	//----- START OF 7TH ZONE AT OFFSET 2000 -----//
	// The 7th zone contains fplacement and is sorted in sub structures
	struct {
		float cabinOffsetX;
		float cabinOffsetY;
		float cabinOffsetZ;
		float cabinOffsetrotationX;
		float cabinOffsetrotationY;
		float cabinOffsetrotationZ;
		float headOffsetX;
		float headOffsetY;
		float headOffsetZ;
		float headOffsetrotationX;
		float headOffsetrotationY;
		float headOffsetrotationZ;
	}truck_fp;
	char buffer_fp[152];
	//----- END OF 7TH ZONE AT OFFSET 2199 -----//

	//----- START OF 8TH ZONE AT OFFSET 2200 -----//
	// The 8th zone contains dplacement and is sorted in sub structures

	struct {
		double coordinateX;
		double coordinateY;
		double coordinateZ;
		double rotationX;
		double rotationY;
		double rotationZ;
	}truck_dp;
	char buffer_dp[52];
	//----- END OF 8TH ZONE AT OFFSET 2299 -----//

	//----- START OF 9TH ZONE AT OFFSET 2300 -----//
	// The 9th zone contains strings and is sorted in sub structures

	struct {
		char truckBrandId[stringsize];
		char truckBrand[stringsize];
		char truckId[stringsize];

		char truckName[stringsize];
		char cargoId[stringsize];
		char cargo[stringsize];
		char cityDstId[stringsize];
		char cityDst[stringsize];
		char compDstId[stringsize];
		char compDst[stringsize];
		char citySrcId[stringsize];
		char citySrc[stringsize];
		char compSrcId[stringsize];
		char compSrc[stringsize];
		char shifterType[16];

		char truckLicensePlate[stringsize];
		char truckLicensePlateCountryId[stringsize];
		char truckLicensePlateCountry[stringsize];

		char jobMarket[32];
	}config_s;
	struct {
		char fineOffence[32];
		char ferrySourceName[stringsize];
		char ferryTargetName[stringsize];
		char ferrySourceId[stringsize];
		char ferryTargetId[stringsize];
		char trainSourceName[stringsize];
		char trainTargetName[stringsize];
		char trainSourceId[stringsize];
		char trainTargetId[stringsize];
	}gameplay_s;

	char buffer_s[20];
	//----- END OF 9TH ZONE AT OFFSET 3999 -----//

	//----- START OF 10TH ZONE AT OFFSET 4000 -----//
	// The 10th zone contains unsigned long long and is sorted in sub structures

	struct {
		unsigned long long jobIncome;
	}config_ull;
	char buffer_ull[192];
	//----- END OF 10TH ZONE AT OFFSET 4199 -----//

		//----- START OF 11TH ZONE AT OFFSET 4200 -----//
	// The 11th zone contains long long and is sorted in sub structures

	struct {
		long long jobCancelledPenalty;
		long long jobDeliveredRevenue;
		long long fineAmount;
		long long tollgatePayAmount;
		long long ferryPayAmount;
		long long trainPayAmount;
	}gameplay_ll;
	char buffer_ll[52];
	//----- END OF 11TH ZONE AT OFFSET 4299 -----//

	//----- START OF 12TH ZONE AT OFFSET 4300 -----//
	// The 12th zone contains special events and is sorted in sub structures

	struct {
		bool onJob;
		bool jobFinished;
		bool jobCancelled;
		bool jobDelivered;
		bool fined;
		bool tollgate;
		bool ferry;
		bool train;
		bool refuel;
		bool refuelPayed;
	}special_b;

	char buffer_special[90];
	//----- END OF 12TH ZONE AT OFFSET 4399 -----//

	//----- START OF 13TH ZONE AT OFFSET 4400 -----//
	// The 13th zone contains substances, place for 25 of them

	struct {
		char substance[SUBSTANCE_SIZE][stringsize];
	}substances;
	//----- END OF 13TH ZONE AT OFFSET 5999 -----//

	//----- START OF 14TH ZONE AT OFFSET 6000 -----//
	// The 14th zone contains values of up to 10 trailers (each have a size of 1560)
	struct {
		scsTrailer_t trailer[10];
	}trailer;

	//----- END OF 14TH ZONE AT OFFSET 21619 -----//
} scsTelemetryMap_t;

#endif
