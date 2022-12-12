const { User } = require("../models/user");
const { Batch } = require("../models/batch");
const { Fee } = require("../models/fee");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const completePayment = async (req, res) => {
  try {
    const { firstName, secondName, phone, mail, password, age, batch } =
      req.body;

    if (
      !firstName ||
      !secondName ||
      !phone ||
      !mail ||
      !password ||
      !age ||
      !batch
    ) {
      return res.send({
        message: "All fields required !",
      });
    }

    let date = new Date();
    let month = date.getMonth();

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        console.log(err);
      } else {
        const newRegistration = new User({
          firstName: firstName,
          secondName: secondName,
          phone: phone,
          mail: mail,
          age: age,
          batch: batch,
          password: hash,
          dateOfAdmission: Date.now(),
        });
        const save = await newRegistration.save();
        if (save) {
          const newFee = new Fee({
            user: save._id,
            month: month + 1,
            dateOfPayment: Date.now(),
          });
          await newFee.save();
          const newBatch = new Batch({
            user: save._id,
            timings: batch,
            month: month + 1,
            dateOfAssignment: Date.now(),
          });
          await newBatch.save();
          res.send({
            message: `Registration successful. You can login with your mail and password.`,
          });
        } else {
          res.send({
            message: "Unable to register",
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { completePayment };
