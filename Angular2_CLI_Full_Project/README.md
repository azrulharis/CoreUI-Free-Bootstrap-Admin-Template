# Angular2DevelopmentCLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.32.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


1. Overall screen try to make it a screen-fit page. For example: Separate the dashboard so that it shows overall performance for the company for the debt they have, a separate dashboard screen for collection agency, separate one for repo agency, etc

2. The forms that we present to customer to also make it a screen-fit page, for example, collection agency info can split it into 3 screens, one screen for company info, one screen for pic info and another one for CEO/head of company info

3. Under Debt, we should have a listing for all debts, showing relevant info on first screen, such as name, prod, outstanding, interest, late payment charge, total due, and acc status. When we click on a specific record, we see more other details

4. I see Customer tab a repetition to Debt List. Unless we have a specific function for it, otherwise I suggest we keep Debt List, and rename to receivable list 

5. Vehicle tab is meant for for purpose?

6. Repo tab is it meant for showing all repossessed vehicles? If yes, then it may be good to show reg number, brand and model, repo date, repo agent, cooling off period (whether 21 days have passed after repo done), redeem or dispose (to show if customer has redeemed back or we have sold off the item)

7. Import data is to options available for importing new debts is it?

8. We have not included the collection info, meaning those collection done thru bank's payee corporation setup on daily basis and as well as payment gateway thru collectius portal. We should have a place to allow uploading of such info manually. By default, we can automate the uploading and posting to the debt list.
[7/26, 4:16 PM] Li Pcode: I like to suggest we group like this:



1. Receivable portfolio
1.1 receivable 
1.2 vehicles list

2. Collection agency
2.1 collection agency maintenance
2.2 collection agency assignment
2.3 collection agency abortion

3. Repo agency
3.1 repo agency maintenance
3.2 repo request admin
3.3 repo list broadcast

4. Payment collection
4.1 payment collection upload
4.2 payment collection status (to show status of payment posting from various collection channels such as banks)

5. New debt
5.1 import new debt

6. User maintenance
6.1 internet user maintenance
6.2 office user maintenance
6.3 collection agency user maintenance
6.4 repo agency user maintenance
(Not sure if we want to make it difficult for ppl to change phone and force user from login out from previous devise)


Receivable ,,,
- Remove loan ID
- amount -> OSB  
- Add admin charge
- Name -> Cust Name

Vehicle,,,
- OSB
- Remove ID
- Repo status
   1. - (Available for repo)
   2. Repossessed 

Cust Profile,,,,,
- Add Originating Financial Services on Debt Info
- Add admin charge
- Legal fee

Guarantor,,,
-Add address
- Gender
-Phone -> House phone

Data Collect ,,,

- Add Originating Financial Services
- Ref date (MBB31122017)


Dashboard,,, 
-Agency -> Agency name,,,
- Remove location,,,
- Usage -> Collection Ratio ,,,
- Collection agains Assign receivable,,,
- Total assign agains collected acc
- Total assign & total assign amount
- Expiry date
- Add payment channel performance each bank performance. Show only today data

Repo Agency,,,
- Same as Agency
- Add OSB, Reg No, Repo status
- Flow: Request RO -> Repossessed -> Police report -> Store yard (Green status)
- Show today active repo
- Add list of repossessed vehicle in store yard


Collection Agency List,,,

- Remove Chart 
- View assign data (Show no of assign data & Total amt)

Collection agency assignment
- Generate assignment (If param setting is 1st of month, disable generate button)
- 


Add agent
- Add profile photo

Import data
-import data -> new debt
- After import, ask 'You wanna send Welcome Letter'. If yes generate list in CSV contain Cust name, address


NGM
- Add generate notification. Payment reminder, welcome letter, notification after 1 day repo (within 21 days), if failed to pay within 21 days, sell it and send After Sales notification.

Payment Collection
- Show only today data.
- Can search by date
- Payment Collection -> Cash management
- Payment collection status. Add bank name, amount collected, no of acc collected, last posted date, Payment method (FPX, Payee corporation, payment gateway) 

- Add Payment channel menu


User access
- Super admin (All)
- Admin (View, edit, delete)
- User view only
- Remove internet user 

Track Mobile app activity
- 

Add Parameter Settings

Send notification to agency for assign & aborted debt

Release letter
- Agency send request to admin -> Approved -> Agency print out

Request Discount
- Same flow as Release letter 

UI
-Left menu green 