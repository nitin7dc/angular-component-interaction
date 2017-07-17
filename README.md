# Quick-Start with Angular Component Interactions
You can get your angular components to talk with each other with few techniques, here we i will show you most of them.

Lets start by creating an angular project using angular-cli.

    > npm install -g @angular/cli    #install angular-cli. Skip if already installed
    > ng new project-name            #create new project
    > cd project-name                #move into our new project folder
    > code .                         #open folder in VS Code
    > ng serve

Ng serve will run a development server on http://localhost:4200 and auto refresh our browser whenever we do any update to our code inside our project folder.

Learn more about angular-cli [here](https://github.com/angular/angular-cli).


Create a new component named to-child using angular-cli with following command. 
     
        > ng g component to-child

This will create a folder 'to-child' inside src/app/

![Alt text](./src/assets/toComponent.png?raw=true "to child")

Our newly created component will also be automatically imported and declared inside our main module.

![Alt text](./src/assets/module.png?raw=true "import in main module")

## Simply pass data from parent to child
- Use @Input decorator with fields in which you want to receive data from parent component.     
- Inside our to-child.component.ts create a variable message with decoration @Input, this will receive data from parent component.  

        import { Component, OnInit, Input } from '@angular/core';

        @Component({
            selector: 'app-to-child',
            templateUrl: './to-child.component.html',
            styleUrls: ['./to-child.component.css']
        })
        export class ChildComponent implements OnInit {

            @Input()
            message:string;

            constructor() { }

            ngOnInit() {
            }

            //this will called when data is passed from parent to child.
            ngOnChanges(val){
                console.log("change detected");
                console.log(val);                
            }

        }

- Inside to-child.component.html 

        <h5>CHILD COMPONENT</h5>
        <p>Message : {{message}}</p>

- On parent component's  app.component.html use our newly created component as follows


        <small>simply passing value to attributes</small>
        <app-to-child message="hello"></app-to-child>

        <small>bind to variable declared in parent component class</small>
        <app-to-child message="message"></app-to-child>
- Add a message in app.component.ts, this message will be passed to child component : app-to-child.

        import { Component, ViewChild, AfterViewInit } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        })
        export class AppComponent implements AfterViewInit{

            message = "hello again";

            ngAfterViewInit() { }

        }


## PASS DATA + UPDATES FROM PARENT TO CHILD
Now lets try to update some variable in parent component and pass the updates to child.

Add one more variable to to-child.component.ts 

    @Input() friends:string[];

This will receive list of friends from parent controller. And when we will do updates those changes will also be passed to child.

Coming back to our parent app.component.ts, add a friends variable and a function to update it.


        import { Component, ViewChild, AfterViewInit } from '@angular/core';        

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        })
        export class AppComponent implements AfterViewInit{

            message = "hello again";
            friends:string[] = [];

            //will add friend to our list of friends array
            add(friend){
                if(friend.value){
                    this.friends.push(friend.value);    
                    friend.value = "";
                }
                console.log(this.friends);
            }

            ngAfterViewInit() {    
                
            }

        }

Add below code to template file app.component.html :

    <div>
        <input #friend type="text" placeholder="name of friend" />
        <button type="button" (click)="add(friend)">add friend</button>
    </div>

    <app-to-child message="List of friends" [friends]="friends"></app-to-child>        

Now you see your updates being passed to child component on the go.

## PASS DATA FROM CHILD TO PARENT.

For this lest create a fresh new component named from-child using angular-cli with following command. 
     
        > ng g component from-child

This will create a folder 'from-child' inside src/app/ and it will also be automatically imported and declared inside our main module, as shown earlier in images.

- Add two button to <b>from-child.component.html</b>, on click of send() will send hello to parent and on reset() we will clear message sent in parent component.

        <button (click)="send()">send hello to parent component</button>
        <button (click)="reset()">reset</button>

- We will need @Output decorator this time. We can pass data with an event emitter declared with @Output decorator. Updated <b>from-child.component.ts </b>  will be as below.

        import { Component, OnInit, Output, EventEmitter } from '@angular/core';

        @Component({
            selector: 'app-from-child',
            templateUrl: './from-child.component.html'
        })
        export class FromChildComponent implements OnInit {

            @Output() sendHello = new EventEmitter();

            send() {
                this.sendHello.emit('hello');
            }

            reset() {
                this.sendHello.emit('');
            }
            
            ngOnInit() {
            }

        }

- Now this new component can be used on parent : <b>app.component.html</b> as below. 

        <p>Message from child : {{messageFromChild}}</p>
        <app-from-child (sendHello)="receiveHello($event)"></app-from-child>  

Here sendHello declared earlier with @Output decorator inside child component will be passing event to some receiveHello() function of parent app.component.ts


- Update <b>app.component.ts</b> with with definition of receiveHello as below : 

        //our new variable holding message from child
        messageFromChild:string;

        //this will receive message from sendHello of child component
        receiveHello(message) {
            this.messageFromChild = message;
            console.log(message);
        }


## ACCESS CHILD FROM PARENT USING LOCAL-VARIABLE.

We even take hold of child component by adding a local variable using #name, we already talked about local-variables in our QUICK START WITH FORMS [here](https://github.com/nitin7dc/angular-forms).

Create a fresh new component named from-child-two using angular-cli with following command. 
     
        > ng g component from-child-two

This will create a folder 'from-child-two' inside src/app/ and it will also be automatically imported and declared inside our main module, as shown earlier in images.

- 'from-child-two' will be a simple component counting seconds with two functions to stop and resume operation. Add following code to <b>app.from-child-two.component.ts</b>



        import { Component, OnInit } from '@angular/core';

        @Component({
            selector: 'app-from-child-two',
            templateUrl: './from-child-two.component.html'
        })
        export class FromChildTwoComponent implements OnInit {

            constructor() {
                this.start();
            }

            ngOnInit() {    
            }

            message:string;
            counter:number = 0;
            counterId;

            start(){
                this.counterId = setInterval(() => {
                    this.counter++;
                    this.message = `I'm counting : ${this.counter}`;
                }, 1000);
            }

            stop(){
                clearInterval(this.counterId);
                this.message = `I'm stopped at ${this.counter}`;
            }

            ngOnDestroy(){
                clearInterval(this.counterId);
            }

        }

- Template will be as below <b> from-child-two.component.html </b>

        <p>{{message}}</p>
        <button (click)="start()">start</button>
        <button (click)="stop()">stop</button>


Now let's put it to use inside <b>app.component.html</b>, add a local-variable to newly created component on parent and we can directly read the counter value.

    <p>Child component is counting : {{child.counter}}</p>  
    <app-from-child-two #child></app-from-child-two>


## ACCESS CHILD FROM PARENT USING @VIEWCHILD.

Local Variables are good, but if we need to perform some advanced task, we can even control child component from parent component class. This time <b>@Viewchild</b> will be of help.
    

- We just need to declare a variable of child component with decorator @Viewchild and then we can access its methods and properties from inside our parent component class.

- Updated <b>app.component.ts</b> will be as below.


        import { Component, ViewChild, AfterViewInit } from '@angular/core';
        import { FromChildTwoComponent } from './from-child-two/from-child-two.component';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        })
        export class AppComponent implements AfterViewInit{

            @ViewChild('two') childTwo:FromChildTwoComponent;

            start(){
                this.childTwo.start();
            }

            stop(){
                this.childTwo.stop();
            }

            ngAfterViewInit() {    
                
            }

        }
- On parent <b>app.component.html</b> we can now even have buttons for the start and stop methods.

        <p>Child component is counting : {{childTwo.counter}}</p>
        <button type="button" (click)="start()">start</button>
        <button type="button" (click)="stop()">stop</button>
        <app-from-child-two #two></app-from-child-two>




# Clone and run project to view all above techniques in action. 