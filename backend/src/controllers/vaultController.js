const vault = require("../model/vault");
const Vault = require("../model/vault");


const getVault = async(req, res) => {
    try {
        const vaults = await Vault.find();

        res.status(200).json(vaults);
    } catch (error) {
        res.status(500).json({
            message: "can't get the vault"
        })
    }
}

const postVault = async(req, res) => {
    try {
        const { site, username, password } = req.body;

        const vault = await Vault.create({
            site,
            username,
            password
        });

        res.status(201).json(vault)
    } catch (error) {
       res.status(500).json({
        message: "failed to upload"
       });
    }
};

const putVault = async(req, res) => {
    try {
        const { id } = req.params;
        const { site, username, password } = req.body;

        const vault = await Vault.findByIdAndUpdate(
            id,
            { site, username, password },
            { new: true }
        )
        
        if (!vault){
            return res.status(404).json({
                message: "value entry not found"
            });
        }
        res.status(200).json(vault);

    } catch (error) {
        res.status(500).json({
            message: "failed to update vault"
        });
    }
};

const deleteVault = async (req, res) => {
    try {
        const { id } = req.params;

        const vault = await Vault.findByIdAndDelete(id);

        if(!vault){
            res.status(404).json({
                message: "vault not found"
            });
        }

        res.status(200).json({
            message: "vault entry deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "failed to delete vault entry"
        });
    }
};

module.exports = {
    getVault, postVault, putVault, deleteVault
}
