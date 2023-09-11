
// const gs = gsap.timeline()

// console.log(g)







window.addEventListener( "mousemove" , (dels)=>{


    // console.log(dels)

    let x = dels.clientX
    let y = dels.clientY


    
    let followerDiv = document.querySelector("#follower")

    let followerDivHeight = followerDiv.getBoundingClientRect().height
    let followerDivWidth = followerDiv.getBoundingClientRect().width

    followerDiv.style.transform = `translate(${x-(followerDivWidth/2) - 60}px , ${y-(followerDivHeight/2)+550}px)`




    let alian = document.getElementById("alian").getBoundingClientRect()






    let moveX = gsap.utils.mapRange( 0 , window.innerWidth , 150 + alian.width/2 , window.innerWidth - (150 + alian.width/2) , -x  )
    console.log(moveX)



    let moveY = gsap.utils.mapRange(0 , window.innerHeight , 120 + alian.height/2 , window.innerHeight - (120 + alian.height/2) , -y )



    gsap.to( "#alian" , {

        left : moveX + alian.width*1.85 , 

        top : moveY  + alian.height/2  ,

        ease : Power3

    } )


} )







if(window.innerWidth < "1000"){
    alert("This website is not Responsive , Open in Large screen display.")
}










