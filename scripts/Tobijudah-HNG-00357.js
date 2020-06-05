class Intern {
   constructor(userName, HNGID, email, language) {
      this.username = userName
      this.hngid = HNGID
      this.email = email
      this.language = language
   }

   createString() {
      return `Hello World, this is ${this.username} with HNGi7 ID ${this.hngid} and email ${this.email} using ${this.language} for stage 2 task`
   }
}

let tobijudah = new Intern('Oluwatobiju Judah Omotosho', 'HNG-00357', 'tobijudah@gmail.com', 'JavaScript')

console.log (tobijudah.createString())