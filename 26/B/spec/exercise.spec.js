describe("Some functions that console log some statements as practice",function(){
    it("First function",function(){
        console.log(`I am the it block one!`);
    });
    it("Second function",function(){
        console.log(`I am the it block two!`);
    });
    it("Third function",function(){
        console.log(`I am the it block three!`);
    });
    it("Forth function",function(){
        console.log(`I am the it block four!`);
    });
    it("Five function",function(){
        console.log(`I am the it block five but I fail`)
        throw new Error();
    });
})