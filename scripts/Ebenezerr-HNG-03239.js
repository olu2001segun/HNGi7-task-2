let myProfile = {
	file: 'Ebenezer-HNG-03239.js',
	output: 'Hello World, this is Ebenezer Akinde with HNGi7 ID HNG-03239 using Javascript for stage 2 task',
	name: 'Ebenezer Akinde',
	id: 'HNG-03239',
	email: 'ebenezerolushola8@gmail.com',
	language: 'Javascript',
	status: 'Pass'
};
function script() {
	return (
		'Hello World, this is ' +
		myProfile.name +
		' with HNGi7 ID ' +
		myProfile.id +
		' and email ' +
		myProfile.email +
		' using Javascript for stage 2 task'
	);
}
console.log(script());
