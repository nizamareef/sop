const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  email: {
    type: String,
    
  },
  fullName: {
    type: String,
    
  },
  age: {
    type: Number,
    
  },
  highestEducationLevel: {
    type: String,
    enum: ['Grade 12', 'Diploma', 'Bachelors Degree', 'Masters Degree'],
    
  },
  instituteCompletedEducation: {
    type: String,
    
  },
  fieldOfStudy: {
    type: String,
        
  },
  hasWorkExperience: {
    type:String,
    
  },
  workExperience: {
    type: String,
    
  },
  instituteInCanada: {
    type: String,
    
  },

  programOfStudyInCanada: {
    type: String,
    
  },
  applyingFromCountry: {
    type: String,
    
  },
  futureGoals: {
    type: String,
    
  },
  listening: {
    type: Number,
    
  },
  reading: {
    type: Number,
    
  },
  speaking: {
    type: Number,
    
  },
  writing: {
    type: Number,
    
  },
  paidFirstYearTuition: {
    type: Boolean,
    
  },
  tuitionFeePaid: {
    type: Number,
  },

  didGIC: {
    type: Boolean,
    
  },
  gicAmountPaid: {
    type: Number,
    
  }

});

module.exports = mongoose.model('details', formSchema)