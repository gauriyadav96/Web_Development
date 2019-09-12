const puppeteer = require('puppeteer');

// class GetApartment {
let apartmentUrl = 'https://www.apartmentfinder.com/Massachusetts/Boston-Apartments'

export let getApartments = async() =>  {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 926 });
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
      await page.goto(apartmentUrl);

      // get hotel details
      let apartmentData = await page.evaluate(() => {
          let apartments = [];
          // get the hotel elements

          let apartmentElms = document.querySelectorAll('div.listingContent');
          // let hotelsElms = document.querySelectorAll('div.sr_property_block[data-hotelid]');
          // get the hotel data
          apartmentElms.forEach((apartmentElement) => {
              // let title, location, rent, description;
              let apartmentJson = {};
              try {
                  apartmentJson.title = apartmentElement.querySelector('span[itemprop="name"]').innerText;
                  apartmentJson.fulladdress = apartmentElement.querySelector('span[title]').innerText;
                  apartmentJson.addressLocality = apartmentElement.querySelector('span[itemprop="addressLocality"]').innerText;
                  apartmentJson.addressRegion = apartmentElement.querySelector('span[itemprop="addressRegion"]').innerText;
                  apartmentJson.postalcode = apartmentElement.querySelector('span[itemprop="postalCode"]').innerText;
                  apartmentJson.rent = apartmentElement.querySelector('span.altRentDisplay').innerText;
                  apartmentJson.description=apartmentElement.querySelector('a[href]').innerText;
                  apartmentJson.unitAvailable = apartmentElement.querySelector('span.unitLabel').innerText;
                  apartmentJson.imageUrl = apartmentElement.querySelector('meta[itemprop="image"][content]').innerText;
                  console.log(apartmentJson.title+ " "+ apartmentJson.streetAddress +" "+ apartmentJson.rent +" "+ apartmentJson.description)
              }
              catch (exception){
                  console.log("catch : "+ exception)
              }
              apartments.push(apartmentJson);
          });
          return apartments;
      });

      // console.dir(apartmentData);
  }
// }
// exports.GetApartment = GetApartment;
