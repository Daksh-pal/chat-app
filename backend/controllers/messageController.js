import { Conversation } from "../models/conversationModel.js";
import  { Message } from "../models/messageModel.js"


export const sendMessage = async(req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id
        const {message} = req.body;

        let conversation = await Conversation.findOne({
            participants :{$all : [senderId,receiverId]},
        });
        
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        };
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        };

        await conversation.save();
        return res.status(400).json({
            message : "Message sent"
        })

        
    } catch (error) {   
    }
}

export const getMessage = async(req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await Conversation.findOne({
            participants : {$all : [senderId,receiverId]} 
        }).populate("messages")
        console.log(conversation.messages);
        return res.status(200).json(conversation?.messages);
    } catch (error) {
        console.log(error);
    }
}