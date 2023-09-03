import React from 'react'

function Delete() {

    // const team = [
    //     { name: "Bill", age: 10 },
    //     { name: "Linus", age: 15 },
    //     { name: "Alan", age: 20 },
    //     { name: "Steve", age: 34 },
    //   ];

    const team = [
        { name: "Bill", age: 10, nic: [{first: 1}, {second: 1}] },
        { name: "Linus", age: 15, nic: [{first: 2}, {second: 2}] },
        { name: "Alan", age: 20, nic: [{first: 3}, {second: 3}] },
        { name: "Steve", age: 34, nic: [{first: 4}, {second: 4}] },
      ];

      const person = team.map((per, i) => {
       const nic = per.nic

       const info = nic.map((n, i) => {
        return n.first
       })
       
        return per.name
        
      })

    //  const nic = team.map((per, i) => {
    //     return per.nic
    //  })

      console.log(person)
      
    //   console.log(team[0].name)
    //   console.log(team[1].name)
    //   console.log(team[2].name)
    //   console.log(team[3].name)

      const fruits = ["banana", "apple", "orange", "watermelon"];
      console.log(fruits)

  return (
    <div>

    </div>
  )
}

export default Delete