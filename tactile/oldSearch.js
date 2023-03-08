window.store = [
	{
		"name": "American Community Survey (ACS)",
		"locations": [
			"state",
			"county",
			"censusTract",
			"zip"
		],
		"url": "https://www.census.gov/acs/www/data/data-tables-and-tools/data-profiles/2020/",
		"format": [
			"table",
			"map"
		],
		"dataPoints": [
			"age",
			"education",
			"health",
			"housing",
			"income/poverty",
			"race/ethnicity",
			"sex"
		]
	}
	,
	{
		"name": "APRA Projects Map",
		"locations": [
			"county",
			"supervisorialDistrict"
		],
		"url": "https://appcenter.gis.lacounty.gov/arpa-projects-map/",
		"format":"map",
		"dataPoints": [
			"income/poverty",
			"foodAssistance",
			"age",
			"groceryStores"
		]
	}
	,
	{
		"name": "CalFresh Data Dashboard",
		"locations": [
			"state",
			"county"
		],
		"url": "https://www.cdss.ca.gov/inforesources/data-portal/research-and-data/calfresh-data-dashboard",
		"format": [
			"map",
			"table",
			"graph"
		],
		"dataPoints": [
			"age",
			"income/poverty",
			"SNAP"
		],
	}
	,
	{
		"name": "CalFresh Data Tables",
		"locations": "all",
		"url": "https://www.cdss.ca.gov/inforesources/research-and-data/calfresh-data-tables",
		"format": "table",
		"dataPoints": [
			"foodInsecurity",
			"language",
			"placeOfOrigin",
			"race/ethnicity",
			"SNAP"
		],
	}
	,
	{
		"name": "California Department of Food and Agriculture Certified Farmers Markets",
		"locations": "county",
		"url": "https://www.cdfa.ca.gov/is/docs/CurrentMrktsCounty.pdf",
		"format": "table",
		"dataPoints": [
			"farmersMarkets"
		],
	}
	,
	{
		"name": "Census Reporter",
		"locations": [
			"state",
			"county",
			"metro"
		],
		"url": "https://censusreporter.org/profiles/16000US0644000-los-angeles-ca/",
		"format": [
			"map",
			"graph"
		],
		"dataPoints": [
			"age",
			"education",
			"housing",
			"income/poverty",
			"language",
			"placeOfOrigin",
			"maritalStatus",
			"race/ethnicity",
			"sex",
			"transportation",
			"veteran"
		],
	}
	,
	{
		"name": "Equity Explorer Map",
		"locations": [
			"address",
			"censusTract",
			"county",
			"crime/arrests",
			"neighborhood",
			"schoolDistrict",
			"supervisorialDistrict",
			"zip"
		],
		"url": "https://experience.arcgis.com/experience/9d7a43397ea84ab98a534be5b5376fba/page/Home/?data_id=dataSource_1-HOLC_Neighborhood_Redlining_443%3A385&views=Thematic-Filters",
		"format":"map",
		"dataPoints": [
			"disability",
			"education",
			"health",
			"housing",
			"income/poverty",
			"language",
			"placeOfOrigin",
			"SNAP",
			"tech",
			"transportation"
		],
	}
	,
	{
		"name": "Food Assistance Providers",
		"locations": "county",
		"url": "https://uscssi.maps.arcgis.com/apps/mapviewer/index.html?webmap=aa9c22761b94450180b916140cbd0f12",
		"format": "map",
		"dataPoints": [
			"income/poverty",
			"foodAssistance"
		],
	}
	,
	{
		"name": "Food Finder Map",
		"locations": [
			"address",
			"city",
			"county",
			"neighborhood"
		],
		"url": "https://foodfinder.211la.org/-118.600153,33.825157,-117.868762,34.228188/project?layers=,34,20,18",
		"format":"map",
		"dataPoints": [
			"age",
			"farmersMarkets",
			"foodInsecurity",
			"foodAssistance",
			"groceryStores"
		],
	}
	,
	{
		"name": "Los Angeles Food Resources",
		"locations": [
			"address",
			"city",
			"county",
			"zip"
		],
		"url": "https://controllerdata.lacity.org/dataset/Food-Resources-in-California/v2mg-qsxf",
		"format":"table",
		"dataPoints": [
			"foodAssistance"
		],
	}
	,
	{
		"name": "Neighborhood Data for Social Change",
		"locations": [
			"address",
			"censusTract",
			"city",
			"neighborhood"
		],
		"url": "https://map.myneighborhooddata.org/",
		"format":"map",
		"dataPoints": [
			"age",
			"crime/arrests",
			"disability",
			"education",
			"foodInsecurity",
			"health",
			"housing",
			"income/poverty",
			"maritalStatus",
			"placeOfOrigin",
			"race/ethnicity",
			"SNAP",
			"transportation",
			"veteran"
		],
	}
	,
	{
		"name": "Regional Economic Accounts",
		"locations": [
			"state",
			"county",
			"metro"
		],
		"url": "https://www.bea.gov/data/economic-accounts/regional",
		"format":"table",
		"dataPoints": [
			"income/poverty"
		]
	}
	,
	{
		"name": "SAIPE Model Input Data",
		"locations": [
			"county",
			"state"
		],
		"url": "https://www.census.gov/data/datasets/time-series/demo/saipe/model-tables.html",
		"format":"table",
		"dataPoints": [
			"income/poverty",
			"SNAP"
		],
	}
	,
	{
		"name": "SAIPE Supplemental Nutrition Assistance Program",
		"locations": [
			"state",
			"county",
		],
		"url": "https://www.census.gov/data-tools/demo/saipe_treemap/saipe_snap_treemap.html",
		"format": [
			"map"
		],
		"dataPoints": [
			"SNAP"
		],
	}
	,
	{
		"name": "Small Area Income and Poverty Estimates (SAIPE)",
		"locations": [
			"county",
			"schoolDistrict",
			"state"
		],
		"url": "https://www.census.gov/data-tools/demo/saipe/#/",
		"format": [
			"table",
			"map",
			"graph"
		],
		"dataPoints": [
			"age",
			"income/poverty"
		],
	}
	,
	{
		"name": "SNAP Community Characteristics - California",
		"locations": [
			"congressionalDistrict",
			"state"
		],
		"url": "https://www.fns.usda.gov/ops/snap-community-characteristics-california",
		"format":"table",
		"dataPoints": [
			"age",
			"disability",
			"income/poverty",
			"race/ethnicity",
			"SNAP"
		]
	}
	,
	{
		"name": "USC Food Desert and Assistance",
		"locations": [
			"censusTract",
			"county",
			"servicePlanningArea"
		],
		"url": "https://uscssi.maps.arcgis.com/apps/mapviewer/index.html?webmap=9cac401f6997440fb7af3fa771dfca28",
		"format":"map",
		"dataPoints": [
			"foodAssistance",
			"foodInsecurity"
		],
	}
	,
	{
		"name": "USC Food Outlets",
		"locations": [
			"censusTract",
			"county",
			"servicePlanningArea"
		],
		"url": "https://uscssi.maps.arcgis.com/apps/mapviewer/index.html?webmap=43a90661b5e04391a5a2e65eb3564a36",
		"format":"map",
		"dataPoints": [
			"foodInsecurity"
		],
	}
	,
	{
		"name": "US Census QuickFacts",
		"locations": [
			"city", 
			"county", 
			"state", 
			"zip"
		] ,
		"url": "https://www.census.gov/quickfacts/fact/table/losangelescitycalifornia/RHI125221",
		"format": [
			"table"
		],
		"dataPoints": [
			"age",
			"disability",
			"education",
			"health",
			"housing",
			"income/poverty",
			"language",
			"placeOfOrigin",
			"race/ethnicity",
			"sex",
			"tech",
			"transportation",
			"veteran"
		]
	}
	,
	{
		"name": "USDA Food Atlas",
		"locations": [
			"state",
			"county"
		],
		"url": "https://www.ers.usda.gov/data-products/food-environment-atlas/go-to-the-atlas/",
		"format":"map",
		"dataPoints": [
			"age",
			"farmersMarkets",
			"foodAssistance",
			"foodInsecurity",
			"groceryStores",
			"health",
			"income/poverty",
			"race/ethnicity",
			"restaurants",
			"SNAP",
			"transportation"
		],
	}
	,
	{
		"name": "USDA SNAP Store Locations",
		"locations": [
			"state",
			"county",
			"zip",
			"address"
		],
		"url": "https://usda-fns.hub.arcgis.com/datasets/USDA-FNS::snap-store-locations/explore?filters=eyJDb3VudHkiOlsiTE9TIEFOR0VMRVMiXX0%3D&location=34.303780%2C-118.388741%2C9.16",
		"format":"map",
		"dataPoints": [
			"SNAP"
		],
	}
];