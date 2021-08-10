
Standardized Usage Statistics Harvesting Initiative ([SUSHI](http://www.niso.org/standards-committees/sushi))  is a National Information Standards Organization ([NISO](http://www.niso.org/welcome-to-niso)) protocol that enables the automatic collection of COUNTER standard usage statistics from library vendor administrative platforms and import into Electronic Resources Management Systems (ERMS). Libraries can measure the success and value of their services by assessing data on user engagement activities; for electronic resources, that data comes in the form of usage statistics. Academic libraries, however, can have 50+ vendors and hundreds of databases in which to collect data from. The SUSHI protocol allows for pulling of usage statistic data from vendor APIs. This client will utilize the the SUSHI protocol to pull, store, and visualize usage statistic data for libraries.

## Project Overview

### What are the major features of your web application?

#### Basic Version

- Create user accounts to safely store library vendor and API key information
- Utilize stored API key information to create API requests and store the returned JSON data in a database
- Visualize stored usage statistic data for a quick glance at pulled usage data

#### Enhanced Version (Time dependent)

- Option to export usage data
- Automated/Scheduled pulls (?)
- Support for COUNTER 4 (Legacy Reports)
- Enhanced data processing and data visualization (usage of all databases, selected databases, etc)

### What problem is it attempting to solve?

Currently, open source SUSHI clients are highly technical or require a LAMP stack to deploy. Additionally, there is currently no open source client option for the newest COUNTER standard, COUNTER 5. This app aims to be a user friendly, updated, and open source sushi client that can be used by librarians who currently have to harvest usage statistics manually.

### What libraries or frameworks will you use?

- [Highcharts](https://www.highcharts.com/) for data visualization
- [Bootstrap](https://getbootstrap.com/) for styling

## Functionality

### Walk through the application from the user's perspective. What will they see on each page? What can they input and click and see? How will their actions correspond to events on the back-end?

Main page is mainly informational, all functionality requires a user to be logged in.

Once logged in, the user will see cards for navigation. There will be the following cards:

- Vendors
- Harvest
- Harvested Data
- Data Dashboard

On the "Vendor" page, the user will be able to view the vendors they have registered on the platform, and register/update vendors. These vendors and accompanying information will be stored as a model within the MySQL database in django.

On the "Harvest" page, the user can select from a set of registered vendors, date ranges, report type, parameters, etc. and click a "harvest" button to send an API request via SUSHI. There will be a console to log the status of the request. The returned data will be stored in the MySQL database in django. Enhanced features will allow the user to schedule report harvesting and harvest legacy reports.

On the "Harvested Data" page, a user can select from a dropdown of vendor, report type, and date range to view a rendered data table of the data that was harvested. Enhanced feature will allow the user to download the datasheet.

The Data Dashboard will provide data visualization via HighCharts, and will use Javascript to allow the user to manipulate how the data is visualized on the screen. Enhanced features will leverage python's data wrangling capabilities to manipulate the data before it is visualized.

## Data Model

### User Profile

- User Name
- Password

### Vendor Profile

- Vendor name
- SUSHI URL
- Requestor ID
- Requestor Name
- Customer ID
- Customer Name
- User Name
- Password
- Requestor Email
- API Key
- Platform

### Usage Data

- Database
- Metric Type
- Month to month columns (Generated as requested?) - Review current JSON responses and create tables that work

## Schedule

### Week 1

- Implement database
    - Load one vendor profile
    - Create one user
- Connect routes to views for accessing data
    - Create Profile
    - Update Profile
    - Delete Profile
    - Create Vendor
    - Update Vendor
    - Delete Vendor

### Week 2

- Develop HTML templates
- Create workable SUSHI Requests
- Refine database solution

### Week 3

- Create data table view page
- Create data visualization page
- Styling

### Week 4

- Bug fixes and style changes