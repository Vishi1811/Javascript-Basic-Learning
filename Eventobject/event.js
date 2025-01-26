// <------------------Event Propagation------------------------->
// Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling and Event Capturing.

// For example, suppose there are three components namely component1, component2, component3. Inside these components, we attached the onClickEventListener event handlers. Now when we click on component3 the event handler for all the three components will be executed. Now here the question is in which order the event will execute. Now at this point event bubbling and capturing comes into the picture.

//<------------------------Bubbling------------------------------------->
// When an event happens on a component, it first runs the event handler on it, then on its parent component, then all the way up on other ancestors’ components. By default, all event handles through this order from center component event to outermost component event.

// Example: In this example, we will create three div components and each component will have an event handler. When we click on component 3, it will give an alert as “component 3 event clicked” then all the way up “component 2 event clicked” and “component 1 event clicked” alerts will display. This is how event bubbling happens from the “bottom to top”.
//<-------------------- Capturing
// It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler. In short, it means that the event is first captured by the outermost element and propagated to the inner elements. It is also called trickle down.

// Example: In this example, we will create three div components and each component will have an event handler. When we click on div component 3 event, it will give an alert as “component 1 event clicked” and then all the way down  “component 2 event clicked” and then “component 3 event clicked” alerts will display. This is how event capturing or trickling happens from the “top to bottom”.

document.getElementById("Image").addEventListener('click',function(e){
    console.log("Clicked on ul");
},true);

document.getElementById('img').addEventListener('click',function(e)
{
    console.log("clicked on gfg image");
},true);

//<-----------------------event.target------------------------------>
// `e.target` refers to the event target of a user interaction, typically within an event handler function. It represents the DOM element upon which the event occurred. For instance, in an event listener for a button click, if the user clicks the button, `e.target` would point to that specific button element. This property is often used to access or manipulate the properties of the triggering element. It's crucial for handling dynamic content or multiple similar elements where identifying the specific element interacting with the user is necessary. Understanding `e.target` is particularly valuable when implementing responsive and interactive web applications, as it allows developers to tailor responses based on the specific UI element involved in the user's action. This property is commonly employed in conjunction with various DOM manipulation techniques for creating more dynamic and user-friendly interfaces.

document.getElementById('Image').addEventListener('click',function(e)
{
    console.log(e.target.parentNode)
    if(e.target.tagName === 'IMG'){
        let removeIt=e.target.parentNode // remove the target element
        removeIt.remove();
        // removeIt.parentNode.removeChild(removeIt)
    }
},false);
