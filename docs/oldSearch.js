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
		"format": [
			"map"
			],
		"dataPoints": [
			"income/poverty",
			"foodAssistance",
			"age",
			"groceryStores"
		]
	}
	,
	{
      "name": "Bowen et al. 2019 - 'Food Insecurity Among Formerly Homeless Individuals Living in Permanent Supportive Housing'",
      "locations": [
      	"city"
      ],
      "url": "https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2018.304927?casa_token=2Ydf0ysNV5oAAAAA%3ALFp8Bp6moGJ7tRwSnondKE8ds-FspF4fOjW5qLAT34AmCPwXmCHZvYp5LOyXUpE5XmxBi4DVkuYT",
      "format": [
      	"study",
      	"table"
      ],
      "dataPoints": [
      	"foodInsecurity",
      	"housing",
      	"income/poverty"
      ]
    }
    ,
	{
      "name": "Caldwell et al. 2020 - 'Food insecurity, participating in the Supplemental Nutrition Assistance Program, and the degree to which patients anticipate help from clinics to find food in Los Angeles County'",
      "locations": [
      	"county"
      ],
      "url": "https://www.sciencedirect.com/science/article/pii/S0091743520303212",
      "format": [
      	"study",
      	"table"
      ],
      "dataPoints": [
      	"age",
      	"education",
      	"foodInsecurity",
      	"health",
      	"housing",
      	"income/poverty",
      	"language",
      	"race/ethnicity",
      	"sex",
      	"SNAP"
      ]
    }
    ,
	{
		"name": "CalFresh Data Dashboard",
		"locations": [
			"county",
			"state"
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
		"locations": [
			"county",
			"state"
		],
		"url": "https://www.cdss.ca.gov/inforesources/research-and-data/calfresh-data-tables",
		"format": [
			"table"
		],
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
		"locations": [
			"address",
			"county"
		],
		"url": "https://www.cdfa.ca.gov/is/docs/CurrentMrktsCounty.pdf",
		"format": [
			"table"
		],
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
		"name": "California Food Policy Advocates - 'Struggling to Make Ends Meet: Food Insecurity in CA'",
		"locations": [
			"county",
			"state"
		],
		"url": "https://www.lafoodbank.org/wp-content/uploads/FoodInsecurity-Factsheet-2019-UCLA.pdf",
		"format": [
			"graph",
			"study",
			"table"
		],
		"dataPoints": [
			"age",
			"foodInsecurity",
			"income/poverty",
			"SNAP"
		]
	}
	,
	{
      "name": "Environmental Health Inspection Results -'Restaurant and Market Health Violations'",
      "locations": [
      	"address",
      	"city"
      ],
      "url": "https://data.lacity.org/Community-Economic-Development/Restaurant-and-Market-Health-Violations/ckya-qgys",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"farmersMarkets",
      	"restaurants"
      ]
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
		"format": [
			"map"
		],
		"dataPoints": [
			"COVID",
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
		"locations": [
			"county"
		],
		"url": "https://uscssi.maps.arcgis.com/apps/mapviewer/index.html?webmap=aa9c22761b94450180b916140cbd0f12",
		"format": [
			"map"
		],
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
		"format": [
			"map"
		],
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
      "name": "Food Stamps Now - 'Fast Food Restaurants that accept EBT Food Stamps'",
      "locations": [
      	"state"
      ],
      "url": "https://foodstampsnow.com/fast-food-restaurants-that-accept-ebt-food-stamps/",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"restaurants",
      	"SNAP"
      ]
    }
    ,
	{
      "name": "Food Stamps Now - 'List of EBT Accepted Stores in LA'",
      "locations": [
      	"address",
      	"city",
      	"state",
      	"zip"
      ],
      "url": "https://foodstampsnow.com/wp-content/uploads/2017/12/List-of-EBT-accepted-Stores-in-LA-Sheet1.pdf",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"SNAP"
      ]
    }
    ,
    {
      "name": "Food Stamps Now - 'List of Gas Stations that Accept EBT in Los Angeles'",
      "locations": [
      	"address",
      	"city",
      	"state",
      	"zip"
      ],
      "url": "https://foodstampsnow.com/list-gas-stations-accept-ebt-los-angeles/",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"SNAP"
      ]
    }
    ,
    {
      "name": "Food Stamps Now - 'List of Grocery Stores that accept Food Stamps'",
      "locations": [
      	"state"
      ],
      "url": "https://foodstampsnow.com/list-grocery-stores-accept-food-stamps/",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"groceryStores",
      	"SNAP"
      ]
    }
    ,
    {
      "name": "Food Stamps Now Search Tool",
      "locations": [
      	"city",
      	"state",
      	"zip"
      ],
      "url": "https://ebtstores.foodstampsnow.com/",
      "format": [
      	"map"
      ],
      "dataPoints": [
      	"farmersMarkets",
      	"groceryStores",
      	"SNAP"
      ]
    }
    ,
	{
      "name": "Furness et al. 2007 - 'Prevalence and predictors of food insecurity among low-income households in Los Angeles County'",
      "locations": [
      	"county"
      ],
      "url": "https://www.cambridge.org/core/journals/public-health-nutrition/article/prevalence-and-predictors-of-food-insecurity-among-lowincome-households-in-los-angeles-county/790CA6F35D7DFAAB99A4820017216262",
      "format": [
      	"study"
      ],
      "dataPoints": [
      	"foodInsecurity",
      	"housing",
      	"income/poverty"
      ]
    }
    ,
	{
		"name": "Los Angeles County Department of Public Health - 'Food Insecurity in Los Angeles County: Before and During the COVID-19 Pandemic'",
		"locations": [
			"county",
			"servicePlanningArea"
		],
		"url": "http://ph.lacounty.gov/nut/media/nutrition-physical-activity-resources/LA_County_Food_Insecurity_Report_2021_508Compliant.pdf",
		"format": [
			"graph",
			"study",
			"table"
		],
		"dataPoints": [
			"age",
			"COVID",
			"education",
			"foodInsecurity",
			"health",
			"housing",
			"income/poverty",
			"race/ethnicity",
			"sex",
			"SNAP"
		]
	}
	,
	{
      "name": "Los Angeles County Department of Public Health - 'Social Determinants of Health: Rising Food Insecurity in Los Angeles County",
      "locations": [
      	"county",
      	"servicePlanningArea"
      ],
      "url": "http://www.publichealth.lacounty.gov/ha/reports/LAHealthBrief2011/FoodInsecurity/Food_Insecurity_2015Fs.pdf",
      "format": [
      	"graph",
      	"study",
      	"table"
      ],
      "dataPoints": [
      	"age",
      	"education",
      	"foodInsecurity",
      	"health",
      	"housing",
      	"income/poverty",
      	"placeOfOrigin",
      	"race/ethnicity",
      	"sex"
      ]
    }
    ,
	{
		"name": "Los Angeles Controller - 'Food Resources in California'",
		"locations": [
			"address",
			"city",
			"county",
			"zip"
		],
		"url": "https://controllerdata.lacity.org/dataset/Food-Resources-in-California/v2mg-qsxf",
		"format": [
			"table"
		],
		"dataPoints": [
			"foodAssistance"
		],
	}
	,
	{
      "name": "Los Angeles Food Policy Council - 'Fresh Ideas for CalFresh'",
      "locations": [
      	"county",
      	"servicePlanningArea",
      	"supervisorialDistrict"
      ],
      "url": "https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/62abbefa3e225d40348ca7ce/1655422751243/FreshIdeasforCalFresh.pdf",
      "format": [
      	"study",
      	"table"
      ],
      "dataPoints": [
      	"COVID",
      	"income/poverty",
      	"language",
      	"recommendations",
      	"SNAP"
      ]
    }
    ,
    {
      "name": "Los Angeles Food Policy Council - 'Good Food for All Agenda'",
      "locations": [
      ],
      "url": "https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/5be5fda240ec9a789e87e811/1541799360838/GoodFoodforAllAgenda2018.pdf",
      "format": [
      	"study"
      ],
      "dataPoints": [
      	"recommendations"
      ]
    }
    ,
	{
      "name": "Los Angeles Office of Finance - 'Active restaurant heat map'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/A-Prosperous-City/Active-restaurant-heat-map/pwji-zbmi",
      "format": [
      	"map",
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance -'Full Service Restaurants'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/A-Prosperous-City/Full-Service-Restaurants/jqf8-b4z2",
      "format": [
      	"map"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Full-Service Restaurants - Council District 3'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/Administration-Finance/Full-Service-Restaurants-Council-District-3/nipp-xum2",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Full-Service Restaurants - Council District 4'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/Administration-Finance/Full-Service-Restaurants-Council-District-4/rzii-s58n",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Full-Service Restaurants - Council District 5'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/Administration-Finance/Full-Service-Restaurants-Council-District-5/tpzk-4fp9",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
	{
      "name": "Los Angeles Office of Finance - 'Grocery Stores Listings'",
      "locations": [
      	"address",
        "city",
        "state",
        "zip"
      ],
      "url": "https://data.lacity.org/Administration-Finance/Grocery-Stores/g986-7yf9",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"groceryStores"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'LA Restaurant Map'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/A-Prosperous-City/LA-Restaurant-Map/a4mr-3tn6",
      "format": [
      	"map",
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Map of Restaurants'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/A-Prosperous-City/Map-of-Restaurants/ycz4-j47g",
      "format": [
      	"map",
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Map of Restaurants in LA'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/Administration-Finance/Map-of-Restaurants-in-LA/y38a-yu7b",
      "format": [
      	"map",
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance -'Restaurants Active LA'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/A-Prosperous-City/Restaurants-Active-LA/6hb7-3458",
      "format": [
      	"map",
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Restaurants in Boyle Heights Vicinity'",
      "locations": [
      	"address",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/A-Prosperous-City/Restaurants-in-Boyle-Heights-Vicinity/khjs-ngj4",
      "format": [
      	"map",
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Restaurants in LA'",
      "locations": [
      	"address",
      	"city",
      	"zip"
      ],
      "url": "https://data.lacity.org/Administration-Finance/Restaurants-in-LA/nqb5-fsih",
      "format": [
      	"table"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Restaurants in LA (Map)'",
      "locations": [
      	"city"
      ],
      "url": "https://data.lacity.org/A-Prosperous-City/Restaurants-in-LA/ieer-tbdq",
      "format": [
      	"map"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
    {
      "name": "Los Angeles Office of Finance - 'Restaurants Heat Map'",
      "locations": [
      	"address",
      	"city",
      	"councilDistrict",
      	"zip"
      ],
      "url": "https://data.lacity.org/Community-Economic-Development/Active-Restaurants-Heat-Map/gtcn-kik7",
      "format": [
      	"table",
      	"map"
      ],
      "dataPoints": [
      	"restaurants"
      ]
    }
    ,
	{
      "name": "Martinez et al. 2017 - 'Food insecurity in California's public university system: What are the risk factors?'",
      "locations": [
      	"state"
      ],
      "url": "https://www.tandfonline.com/doi/abs/10.1080/19320248.2017.1374901",
      "format": [
      	"study"
      ],
      "dataPoints": [
      	"age",
      	"foodInsecurity",
      	"income/poverty",
      	"race/ethnicity"
      ]
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
		"format":[
			"map"
		],
		"dataPoints": [
			"age",
			"crime/arrests",
			"disability",
			"education",
			"foodInsecurity",
			"health",
			"housing",
			"income/poverty",
			"language",
			"maritalStatus",
			"placeOfOrigin",
			"race/ethnicity",
			"SNAP",
			"tech",
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
		"format": [
			"table"
		],
		"dataPoints": [
			"income/poverty"
		]
	}
	,
	{
      "name": "Ricks et al. 2015 - 'Food insecurity and intimate partner violence against women: results from the California Women’s Health Survey'",
      "locations": [
      	"state"
      ],
      "url": "https://www.cambridge.org/core/journals/public-health-nutrition/article/food-insecurity-and-intimate-partner-violence-against-women-results-from-the-california-womens-health-survey/BB8569349DF06712C0F3DFE2F84B9911",
      "format": [
      	"study"
      ],
      "dataPoints": [
      	"education",
      	"foodInsecurity",
      	"income/poverty",
      	"race/ethnicity"
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
		"format": [
			"table"
		],
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
      "name": "Schmitz et al. 2016 - 'Food insecurity among people who inject drugs in Los Angeles and San Francisco'",
      "locations": [
      	"city"
      ],
      "url": "https://www.cambridge.org/core/journals/public-health-nutrition/article/food-insecurity-among-people-who-inject-drugs-in-los-angeles-and-san-francisco/910432F371AAD2E894083DF5A88FC4B8",
      "format": [
      	"study"
      ],
      "dataPoints": [
      	"drug",
      	"housing",
      	"foodInsecurity"
      ]
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
		"format": [
			"table"
		],
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
		"name": "USC Dornsife - 'Enough to Eat: The Impact of COVID-19 on Food Insecurity and the Food Environment in L.A. County April 2020 - September 2021'",
		"locations": [
			"censusTract",
			"city",
			"county"
		],
		"url": "https://publicexchange.usc.edu/wp-content/uploads/2021/10/Enough-to-Eat.pdf",
		"format": [
			"graph",
			"map",
			"study"
		],
		"dataPoints": [
			"age",
			"COVID",
			"foodAssistance",
			"foodInsecurity",
			"groceryStores",
			"income/poverty",
			"race/ethnicity",
			"restaurants",
			"sex",
			"SNAP",
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
		"format": [
			"map"
		],
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
		"format": [
			"map"
		],
		"dataPoints": [
			"foodInsecurity"
		],
	}
	,
	{
		"name": "USC Dornsife - 'Improving Healthy Food Access in Four Eastside Los Angeles Neighborhoods'",
		"locations": [
			"neighborhood"
		],
		"url": "https://publicexchange.usc.edu/wp-content/uploads/2023/02/Improving_Healthy_Food_Access_in_Eastside_LA-Report_Feb2023.pdf",
		"format": [
			"study",
			"map",
			"table"
		],
		"dataPoints": [
			"age",
			"income/poverty",
			"foodAssistance",
			"foodInsecurity",
			"groceryStores",
			"placeOfOrigin",
			"race/ethnicity",
			"SNAP",
			"transportation"
		]
	}
	,
	{
	  "name": "USC Dornsife - 'The Impact of COVID-19 on Food Insecurity in Los Angeles County: April to July 2020'",
	  "locations": [
	  	"county",
	  	"servicePlanningArea"
	  ],
	  "url": "https://publicexchange.usc.edu/wp-content/uploads/2021/02/USC_LAC_Food_Insecurity_Report_April-July_2020.pdf",
	  "format": [
	  	"graph",
	  	"study",
	  	"table"
	  ],
	  "dataPoints": [
	  	"age",
	  	"COVID",
	  	"foodAssistance",
	  	"foodInsecurity",
	  	"income/poverty",
	  	"race/ethnicity",
	  	"sex",
	  	"SNAP",
	  	"transportation"
	  ]
	}
	,
	{
      "name": "USC Dornsife - 'The Impact of COVID-19 on Food Insecurity in Los Angeles County: April to May 2020'",
      "locations": [
      	"county"
      ],
      "url": "https://publicexchange.usc.edu/wp-content/uploads/2020/07/USCLAC-Food-Insecurity-Report-April-%E2%80%93-May-2020.pdf",
      "format": [
      	"graph",
      	"study"
      ],
      "dataPoints": [
      	"age",
      	"COVID",
      	"foodAssistance",
      	"foodInsecurity",
      	"groceryStores",
      	"income/poverty",
      	"race/ethnicity",
      	"sex",
      	"SNAP"
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
		"format": [
			"map"
		],
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
		"format": [
			"map"
		],
		"dataPoints": [
			"SNAP"
		],
	}
	,
	{
      "name": "Wiss et al. 2021 - 'Food insecurity partially mediates the association between drug use and depressive symptoms among men who have sex with men in Los Angeles, California'",
      "locations": [
      	"city",
      	"county"
      ],
      "url": "https://www.cambridge.org/core/journals/public-health-nutrition/article/food-insecurity-partially-mediates-the-association-between-drug-use-and-depressive-symptoms-among-men-who-have-sex-with-men-in-los-angeles-california/F5CD79E8041A14420883556DB21EACF9",
      "format": [
      	"graph",
      	"study",
      	"table"
      ],
      "dataPoints": [
      	"drug",
      	"foodInsecurity"
      ]
    }
];