const hng = [{
    name: 'Azeez Jamiu Adewale',
    internshipId: 'HNG-01243',
    emailAddress: 'jamiuazeez49@gmail.com',
    language: 'Javascript'
}];

const task = details => {
    const currentDetails = details.map(data => {
        return ` Hello World, this is ${data.name}  with HNGi7 ID ${data.internshipId}, and email address ${data.emailAddress} using ${data.language} for stage 2 `;
    });
    return currentDetails;
}
console.log(task(hng));