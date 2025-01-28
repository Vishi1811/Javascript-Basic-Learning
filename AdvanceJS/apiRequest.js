const requesUrl='https://api.github.com/users/hiteshchoudhary';
const xhr=new XMLHttpRequest();
xhr.open('GET',requesUrl);
let image;
xhr.onreadystatechange=function()
{
    if(xhr.readyState===4)
    {
        
        const data = JSON.parse(this.responseText); // Parse response
        console.log(data);
        const image = data.avatar_url; // Get image URL

        // Create elements
        const div = document.createElement('div');
        const img = document.createElement('img');
        
        img.src = image;  // Set image source
        img.alt = "Hitesh"; // Set alt text
        img.style.border = "2px solid red";  // Correct border
        img.style.borderRadius = "5px";
        img.style.width = "250px";  // Optional styling
        img.style.height = "250px";    
        
        
        const NoOfFollowers=data.followers;
        const h2=document.createElement("h2");
        h2.textContent = `Followers: ${NoOfFollowers}`;
        h2.style.color="red"
        // div.style.display = "flex";
        // div.style.flexDirection = "column"; 

        div.appendChild(img); // Append image to div
        div.appendChild(h2);
        document.body.appendChild(div); // Append div to body

    }
        

    console.log(xhr.readyState);
    
}
xhr.send();




