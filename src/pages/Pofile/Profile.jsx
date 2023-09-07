import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../../components/Globel/Header/Header";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <Header/>
      <div className="container Profile-information profile1">
        <div className="content">
          <h2 className="profile-title">Profile Information</h2>
          <p>Help us by answering questions to get you started</p>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
            <h5 className=" seconry-one"> I'm Looking For </h5>
              <div className="col">
                <div className="role">
                  <div class="all-2">
                    <div class="dropdown">
                      <select class="minimal">
                        <option>Mentee</option>
                        <option>Mentor</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="company">
                  <div class="mm">
                    <input
                      class="input-gernal input-current"
                      type="text"
                      placeholder="Current Company"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <h5 className="seconry-one"> My designation is </h5>
              <div className="col">
                <div className="designation">
                  <div class="all-2">
                    <select class="minimal">
                      <option>Computer science</option>
                      <option>Mentee</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="Experience">
                  <div class="mm">
                    <input
                      class="input-gernal input-current"
                      type="text"
                      placeholder="Years Of Experience"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="Expertise">
                  <div className="col col-md-12 col-sm-12">
                    <input
                      class="input-gernal input-current input skills"
                      type="text"
                      placeholder="Expertise"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="Location">
                  <input
                    class="input-gernal input-current location input"
                    type="text"
                    placeholder="Location"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button class="btn-gernal btn-defauit mt-5 button-upload" style={{width:'fit-content'}}>
                Upload resume
              </button>
            </div>

            <div className="buttons d-flex w-100">
              <p className="blue-reguar-txt-small mt-2 para">
                Uploading your resume is not a must, but it helps those wvho are
                looking for specific qualifications
              </p>
              <button class="btn-gernal btn-accept submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
