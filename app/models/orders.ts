import mongoose, { Schema } from 'mongoose';

// Define the schema for the orders
// Os schemas aqui são definidos para o banco de dados MongoDB
// Definidos a recomendação do documento enviado para o teste mais dados necessários para o funcionamento do sistema IRL
// Também note que a indexação é reforçada. Isso é feito para garantir que o banco de dados seja eficiente e rápido

const item = new Schema({
    id: { type: Number, required: true, unique: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    amountDone: { type: Number, default: 0 },
    requestedAt: { type: Number, required: true },
    updatedAt: { type: Number },
    sector: { type: String, required: true },
    issues: [
        {
            description: { 
                type: String
            },
            status: { type: String },
            createdAt: { type: Number }
        }
    ],
    history: [
        {
            amount: {
                type: Number
            },
            timestamp: {
                type: Number
            },
            emitedBy: {
                type: String
            },
            rework: {
                type: Boolean
            },
            quality: {
                type: Number
            }
        }
    ]
});

let modeledFix = mongoose.models.Orders

if (!modeledFix) {
    modeledFix = mongoose.model("Orders", item)
    modeledFix.createIndexes()
}

const Orders = modeledFix;

export { Orders };