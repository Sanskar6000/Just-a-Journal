const Entries = require('../models/entryModel.js');

const entryController = {
  getEntries: async (req, res) => {
    try {
      const entries = await Entries.find({ user_id: req.user.id });
      res.json(entries);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createEntries: async (req, res) => {
    try {
      const { title, date, content } = req.body;
      const newEntry = new Entries({
        title,
        date,
        content,
        user_id: req.user.id,
        name: req.user.name,
      });
      await newEntry.save();
      res.json({ msg: 'Created a new Entry' });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteEntries: async (req, res) => {
    try {
      await Entries.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Deleted an Entry' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  updateEntries: async (req, res) => {
    try {
      const { title, date, content } = req.body;
      await Entries.findOneAndUpdate(
        { _id: req.params.id },
        {
          title,
          date,
          content,
        }
      );
      res.json({ msg: 'Updated an Entry' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  getEntry: async (req, res) => {
    try {
      const entry = await Entries.findById(req.params.id);
      res.json(entry);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = entryController;
