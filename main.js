// import dep to get site html (scrapping)

// page to scrape
const collectionsPage = "https://www.andersondesigngroupstore.com/a/collections";
const urlQuery = [].slice.call(document.querySelectorAll('#anderson-design-group > div.wrapper > div.main_bg > div > div > div > div.main_content_in > div.art_items li a')).map(link => link.href);

// fetch html from collections page

// collect all colleciton urls

// collection all collection sub urls