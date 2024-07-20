from bs4 import BeautifulSoup
import requests
import json

PATH = 'https://www.tcdb.com/HOF.cfm?Type=Baseball'

try:
    # Send a GET request to the URL
    response = requests.get(PATH)
    response.raise_for_status()  # Raise an exception if the request failed
    html_text = response.text

    # Parse the HTML content of the page using BeautifulSoup
    soup = BeautifulSoup(html_text, 'html.parser')

    # Find all h3 tags with a year (any year)
    all_h3_years = soup.find_all('h3', class_='site', string=lambda text: text and text.isdigit())

    # Set the range of years you want to process
    start_year = 2006
    end_year = 2024

    result = []
    # Loop through the years within the specified range
    for h3_year in all_h3_years:
        year = int(h3_year.get_text())
        if start_year <= year <= end_year:
            # Find the list items (people) under the h3 tag
            people_list_items = h3_year.find_next('ul').find_all('li')

            # Extract and print the links (people) from the list items
            for li in people_list_items:
                link = li.find('a')
                if link:
                    person_link = link['href']
                    person_page = requests.get('https://www.tcdb.com/' + person_link)
                    person_page.raise_for_status()
                    person_soup = BeautifulSoup(person_page.text, 'html.parser')

                    name_div = person_soup.find('div', id='content')
                    name_col = name_div.find('div', class_='col-sm-8') if name_div else None
                    if name_col:
                        name = name_col.find('h4', class_='site').get_text(strip=True)

                        # Find the "Born" information
                        born_strong = name_col.find('strong', text='Born:')
                        if born_strong:
                            born_text = born_strong.next_sibling.strip()
                        else:
                            born_text = "N/A"

                        # Find the carousel item and the image URL
                        carousel_item = person_soup.find('div', class_='carousel-item')
                        image_tag = carousel_item.find('img') if carousel_item else None
                        image_url = image_tag['src'] if image_tag else "N/A"
                        
                        # Optional Args
                        reviewId = []
                        result.append({'name': name, 'description': born_text, 'image': 'https://www.tcdb.com' + image_url})

    # Save the result to a JSON file
    with open('result.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

except requests.RequestException as e:
    print(f"Error fetching the webpage: {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")