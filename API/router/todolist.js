const Router = require('express').Router;
const router = new Router();
const Todolist = require ('../models/todomodel')


router.post ("/", async (req,res)=> {
        const NewTodo = new Todolist(req.body)
        try {
            const savedTodo = await NewTodo.save();
            res.status(200).json(savedTodo);
        } catch (e){
            res.status(500).json(e)
        }
    }
);

router.put("/:id", async (req, res) => {
    try {
        
            try {
                const updatedTodo = await Todolist.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedTodo);
            } 
            
            catch (err)
             {
                res.status(500).json(err);
            }
         
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const todo = await Todolist.findById(req.params.id);
        
            try {
                
                await todo.delete();
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
       
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get("/",async (req,res)=>{
    try{
        const todos = await  Todolist.find();
        res.status(200).json(todos)
    } catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router