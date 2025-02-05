const response=fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>
{
    if (!response.ok) 
    {  // Check for HTTP errors
    throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
})
.then((data)=>{
    const div=document.createElement('div');
    const h=document.createElement('h1');
    const img=document.createElement('img');

    h.textContent="Chai aur Code";
    h.style.color="black"

    img.src = data.avatar_url;  // Set image source
    img.alt = "Hitesh Image"; // Set alt text
    img.style.border = "2px solid red";  // Correct border
    img.style.borderRadius = "5px";
    img.style.width = "250px";  // Optional styling
    img.style.height = "250px";

    const NoOfFollowers=data.followers;
    const h2=document.createElement("h2");
    h2.textContent = `Followers: ${NoOfFollowers}`;
    h2.style.color="red"
   
    div.appendChild(h);
    div.appendChild(img);
    div.appendChild(h2);
    document.body.appendChild(div);
   
})
.catch((error)=>
{
    const errorDiv = document.createElement("div");
    errorDiv.style.color = "red";
    errorDiv.style.fontSize = "20px";
    errorDiv.style.textAlign = "center";
    errorDiv.style.marginTop = "20px";
    errorDiv.textContent = `Error: Something Went Wrong! ${error.message}`;

    document.body.appendChild(errorDiv); // Show error message on screen
    console.error(error); // Log error for debugging
});