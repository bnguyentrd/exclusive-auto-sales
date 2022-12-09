## Project CarCar

## Team:
Anthony - Service microservice
Bobby - Sales microservice


## How to run Application:

1. Fork the repository, then copy path to clone with https.

2. Open your terminal and enter: git clone <<gitlab link>>

3. Go into the project directory: CD <<project name>>

4. Open Docker; while Docker is running, use these commands in terminal.
    - docker volume create beta-data
    - docker-compose build
    - docker-compose up

5. Make migrations:
    - docker exec -it <<docker container name>> bash
    - python manage.py makemigrations
    - python manage.py migrate

6.  Open VS Code:
    - code .

7. Go to http://localhost:3000 to access webpage

## Domain Driven Design:

![alt text](images/DDD.png)

## Services:

# Inventory:
    - Monolith contains Manufacturers, VehicleModel, and Automobiles in inventory.

    - Inventory allows:

        - add feature for a new vehicle model to vehicle models list

            - http://localhost:3000/models/new 


        - add feature for a new automobile into inventory 

            - http://localhost:3000/automobiles/new


        - list feature of manufacturers; Displays:[name] 

            - http://localhost:3000/manufacturer


        - vehicle models list: shows list of vehicle models; Displays: [name, manufacturer, picture]

            - http://localhost:3000/models


        - automobiles list: shows list of automobiles; Displays:[VIN, color, year, model, and manufacturer] 

            - http://localhost:3000/automobiles



# Service Appointment:
    - Service appointment microservice handles and maintains information of set appointments for automobiles and its owner.

    - Service appointment allows:

        - feature for new technicians: add form for each technician [name, employee_number] 

            - http://localhost:3000/technicianform/new


        - feature for new service appointments: add form to create new appointments; Displays:[VIN, owner, date/time, technician, reason] 

            - http://localhost:3000/serviceappointmentform/new


        - appointment list: shows list of appointments; Displays: [VIN, owner, date/time, technician, reason, VIP, fin] appointments can be marked as canceled or finished 
        
            - http://localhost:3000/appointmentlist


        -  Service History: allows for a filter search using VIN of specific car. Displays:[owner, date/time, technician, reason] 

            - http://localhost:3000/servicehistory


        - VIP status feature: automobiles purchased from dealership will indicate VIP status.



# Sales:
The Sales application keeps track of automobile sales that come from the inventory.

    Features:
        - Add new sales rep(name and a unique employee number) then adds to sales reps list 

            - http://localhost:3000/salesreps/new


        - Add new customers(name, address, and phone number) then adds to sales customers list 

            - http://localhost:3000/salescustomers/


        - Add new sales record(sales price, sales customer, sales rep, automobile(vin)) then adds to sales record list

            - http://localhost:3000/salesrecords/new


        - Access to each sales rep’s sales history
            - http://localhost:3000/salesreps/

            - Sales Rep's Name
            - Sales Customer's Name
            - Automobile's VIN
            - Sale's price


        - Access to list of sales records
            - http://localhost:3000/salesrecords/

            - Sales Rep's Name
            - Employee's ID
            - Sales Customer's Name
            - Automobile's VIN
            - Sale's price


## API Documentation:

# Inventory:

    Vehicle Model List:
        - (GET) | http://localhost:8100/api/models/ 
        ```{
	"models": [
		{
			"href": "/api/models/1/",
			"id": 1,
			"name": "Sebring",
			"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "BMW"
			}
		}
	]
}```

    Create Vehicle Model:
        - (POST) | http://localhost:8100/api/models/
        INPUT: 
        ```{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}```
        OUTPUT:
        ```{
	"href": "/api/models/1/",
	"id": 1,
	"name": "Sebring",
	"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "Chrysler"
	}
}```
