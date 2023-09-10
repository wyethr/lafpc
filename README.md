# LAFPC

https://wyethr.github.io/lafpc/

TOTAL NUMBER OF SOURCES: 62

NEW POTENTIAL DATA POINTS: 
*** Childhood Food Insecurity
    Martinez et al. 2017 - UC school system
*** Domestic Violence
    Ricks et al. 2016 - 'food insecurity and intimiate partner violence'
*** Environment
    Neighborhood Data for Social Change
*** Fertility 
    Census Reporter
*** Farms
    LAFPC 2020 Dashboard
*** Food Price
    Public Exchange - Improving Healthy Food Access
*** Obesity 
    Los Angeles County Department of Public Health - Social Determinants of Health
*** Presence of Children - a lot more 
    Furness et al. 2007
    Ricks et al. 2015 - intimate partner violence
*** Sexuality 
    Wiss et al. 2021 - Men Who Have Sex With Men + Drugs
*** Social Network/Connectedness
    USC - The impact of COVID-19 ... May 2020
*** Violence 
    Schmitz et al. 2016 - Food insecurity among people who inject drugs

LOCATIONS: 
*** Coordinates 
    LA Office of Finance - Active restaurant heat map (check other la office of finance)
*** Gas Stations
    List of Gas Stations that Accept EBT in Los Angeles

FORMAT FOR NEW SOURCES: 
{
      "name": "",
      "locations": [
      ],
      "url": "",
      "format": [
      ],
      "dataPoints": [
      ]
    }
    ,

ELENA SOURCES: 

Stores that accept EBT
https://foodstampsnow.com/wp-content/uploads/2017/12/List-of-EBT-accepted-Stores-in-LA-Sheet1.pdf

https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/62abbefa3e225d40348ca7ce/1655422751243/FreshIdeasforCalFresh.pdf

https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/5be5fda240ec9a789e87e811/1541799360838/GoodFoodforAllAgenda2018.pdf

https://drive.google.com/file/d/1Sj3Xy7HnIJNUkGIjF9vntuaNb30NMcs3/view

https://ecologycenter.org/fmfinder/

https://www.lafoodbank.org/find-food/pantry-locator/

https://usda-fns.maps.arcgis.com/apps/webappviewer/index.html?id=e1f3028b217344d78b324193b10375e4

WIC locations in los angeles
https://www.wicprogram.net/wic-approved-stores-in-los-angeles-ca-wsc1504

WIC locations in California
https://www.cdph.ca.gov/Programs/CFH/DWICSN/CDPH%20Document%20Library/WICCard/Stores%20Accepting%20California%20WIC%20Card.pdf

WIC by zipcode
https://myfamily.wic.ca.gov/Home/WICOfficeGrocer

Food Distribution Program on Indian Reservations
https://fns-prod.azureedge.us/sites/default/files/ops/StudyofFDPIR.pdf
https://www.federalregister.gov/documents/2022/10/18/2022-22570/food-distribution-program-on-indian-reservations-self-determination-demonstration-project
https://fns-prod.azureedge.us/sites/default/files/ops/FDPIRRegionalVendorPilot-Entire%20Report.pdf
https://www.fns.usda.gov/pd/food-distribution-program-tables
https://fns-prod.azureedge.us/sites/default/files/ops/TribalAdministration.pdf
(dates of publication included)

Multi-Agency Task Force Report to Congress, July 2016
https://fns-prod.azureedge.us/sites/default/files/fdd/Multi-Agency-Taskforce-Report-Congress-2016.pdf

https://hjhp.hkspublications.org/wp-content/uploads/sites/15/2022/06/FINAL_HJHP-Volume-34.pdf#page=8
https://scholarworks.calstate.edu/downloads/hm50tx29z

https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/5e45c5915750af6b4e5e5c4b/1581630905550/2020FoodSystemDashboard.pdf

NEW SOURCES: 

http://healthpolicy.ucla.edu/chis/Pages/default.aspx

http://healthpolicy.ucla.edu/chis/data/Pages/GetCHISData.aspx

https://www.ers.usda.gov/data-products/food-security-in-the-united-states/

https://www.census.gov/data/datasets/time-series/demo/cps/cps-supp_cps-repwgt/cps-food-security.html#cpssupps

https://www.ers.usda.gov/data-products/food-access-research-atlas/

https://gisportal.ers.usda.gov/portal/apps/experiencebuilder/experience/?id=a53ebd7396cd4ac3a3ed09137676fd40

https://www.ers.usda.gov/data-products/supplemental-nutrition-assistance-program-snap-data-system/go-to-the-atlas/

https://www.ers.usda.gov/data-products/foodaps-national-household-food-acquisition-and-purchase-survey/

https://laist.com/news/how-to-la/food-insecurity-is-increasing-in-la-how-microfarms-can-help

https://publicexchange.usc.edu/wp-content/uploads/2022/09/USC-Food-Insecurity-Research-Brief_September-2022.pdf?utm_content=&utm_medium=email&utm_name=&utm_source=govdelivery&utm_term=

https://thesource.metro.net/2021/02/08/metro-conversations-partnering-to-address-food-insecurity/

https://www.lamag.com/citythinkblog/food-insecure-los-angeles/

http://lapublichealth.org/wwwfiles/ph/hae/ha/la%20health%20foodinsecurity.pdf

https://hungerandhealth.feedingamerica.org/understand-food-insecurity/hunger-health-101/

https://www.journals.uchicago.edu/doi/full/10.1086/713477

http://www.urbanecology.org/combating-supermarket-flight-los-angeles/

https://www.enotrans.org/article/pivoting-from-mobility-on-demand-to-food-delivery-lessons-from-the-mod-pilot-in-los-angeles/

https://ushunger.org/blog/transportation-food-insecurity/

https://www.usnews.com/news/cities/articles/2020-12-23/americans-arent-getting-enough-to-eat-during-the-coronavirus-pandemic-heres-whats-happening-in-los-angeles-county 

https://www.feedingamerica.org/sites/default/files/2019-05/2017-map-the-meal-gap-full.pdf

https://www.sciencedirect.com/science/article/pii/S0091743517303304 

## Website

Serve website locally:
```
  runLocal
  bundle exec jekyll serve --baseurl=''
```

Build website for the web: 
```
    buildWebsite
    bundle exec jekyll build
```

Adding permissions: 
``` 
    chmod +x buildWebsite
```
