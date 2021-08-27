function start()
{
    var ob=[]
    var mystudents=document.querySelectorAll("#students li")
    document.getElementById("total").innerHTML="total number of students = "+mystudents.length
    mystudents.forEach(function(item){
        item.onclick=function(e){
            this.classList.add("bg-danger");
            ob.push(this.innerText)
            set1=new Set(ob)
            document.getElementById("absent").innerHTML="Number of absentees = "+set1.size
            var absentees=Array.from(set1)
            document.getElementById("mytext").innerHTML="absentees are : "+absentees
            console.log(set1)
        }
    })
}
