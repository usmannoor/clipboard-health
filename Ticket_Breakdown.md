# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

I am assuming that we are using **Node.js** as our Backend framework, **Angular CLI** as our Frontend framework
 and **MySQL** as our working Database.
### 1. Backend - Add unique id column against Agents


#### 1.1. Details
- Write a script which will add a new column `agent_id` 
OR
- Write a migration in case if you are using `ORM`
- Set data-type and length of `agent_id` as `varchar(40)` //assuming it would be some uuid
- Set **Unique Constraint** against `agent_id`

* As we are giving control to facility to add the ids so we cannot set `agent_id` as **NULL** by default 


#### 1.2. Acceptance Criteria
- Type must be **alphanumeric** and restricted to **40 characters**
- Same `ids` should not get inserted


#### 1.3. Efforts
- **1 + 1** Story points for *Dev + QA* respectively



### 2. Backend - Create a new endpoint for Facility to insert agent ID.

#### 2.1. Details
- Create a new API (**UPDATE**) named as `/agent/:id` in the routes
- The parameter `id` will be alphanumeric
- Add required validations (if using any library like `joi`)
- Return `{message: '', agent_id: ''}` in response with proper message


#### 2.2. Acceptance Criteria
- `/agent/:id` should only work for **UPDATE** and not for other verbs
- `id` must have a type of alphanumeric with character limit of 40
- Response must be in the format `{message: '', agent_id: ''}`
- `agent_id` should only return in case of successful update


#### 2.3. Efforts
- **3 + 2** Story points for *Dev + QA* respectively



### 3. Frontend - Add a new action button on Agent list in each row.

*Assuming we have a page in which list of all Agents are displayed against each Facility.*

#### 3.1. Details
- Create a new action button (**Add ID**)
- On clicking the action button, open a confirmation modal with text **Do you want to add a new ID?** 


#### 2.2. Acceptance Criteria
- Action button must be added against each agent row
- Confirmation modal should popup while going to add a new id
- If add is already added then disable the action button

#### 2.3. Efforts
- **3 + 2** Story points for *Dev + QA* respectively



### 4. Frontend - API Integration of adding new ID.

*Assuming we have a page in which list of all Agents are displayed against each Facility.*

#### 4.1. Details
- Integrate `/agent/:id` endpoint on Agent list page
- `id` parameter will be a UUID, you can use some npm module or create a custom function which will do the needful 


#### 4.2. Acceptance Criteria
- Action button must be enabled for already not set IDs
- Action button must get disabled if the insertion is successful
- Button state should get updated when the response is being received from BE.

#### 4.3. Efforts
- **3 + 2** Story points for *Dev + QA* respectively
