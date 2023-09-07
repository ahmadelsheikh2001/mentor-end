import React from "react";
import "./MentorOpp.css";

import { Trash } from "react-bootstrap-icons";
import { AiFillPlusSquare } from "react-icons/ai";

export default function MentorOpp() {
  return (
    <>
      <section className="Req_Opp py-4  text-sm-nowrap">
        <div className="container">
          <h2 className=" App d-md-none pt-2 text-start pb-0 mb-0">
            Applications
          </h2>
          <div className="row">
            <div className="col-md-3 side px-2">
              {/* // require side component her */}
              <ul className="side_List">
                <li className="side_title">User Profil</li>
                <li className="side_title">Settings </li>
                <li className="side_title">Terms and Privacy </li>
                <li className="side_title side_title2 mt-5 ">
                  My Mentoreing Opportunities{" "}
                </li>
                <li className="side_title">
                  New Mentoring Opportunity{" "}
                  <AiFillPlusSquare className="icon_color" />{" "}
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-9 mt-5 ">
              <div className=" col- col-md-12">
                <div className="Req_table py-4  ">
                <div className="col-md-12 req-d">
                    <div className="Req_header mb-2 p-3 d-flex justify-content-between align-items-center">
                      <div className="col-md-4 col-sm-12">
                        <h2 className="black-reguar-txt-mediam">
                          Website UI design implementation
                        </h2>
                      </div>
                      <div className="col-md-2 col-sm-12 ">
                        <span className="blue-reguar-txt-small ">
                          2022/7/31
                        </span>{" "}
                        <span className="blue-reguar-txt-small mx-2 ">
                          Published
                        </span>{" "}
                      </div>
                      <div className="res1 col-md-4 col-sm-12 d-flex justify-content-end  align-items-center ">
                        <button className="btn-gernal btn-new-request mx-2   ">
                          3 Requests
                        </button>
                        <span className="Req_span ">
                          <Trash />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="Req_header  d-md-flex mb-2 p-4 col-md-12 ">
                    <div className="col-md-6 d-flex justify-content-start align-items-center ">
                      <div>
                        <div className="Req_Circle "></div>
                      </div>
                      <div className="d-sm-block ">
                        <p class="blue-bold-txt-large mx-4 mb-0   ">
                          Balqees Hamdi{" "}
                        </p>
                        <p class="black-bold-txt-small mx-4 ">
                          Front end developer
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end justify-content-sm-end align-items-center">
                      <button class="btn-gernal btn-accept mx-2">
                        {" "}
                        Accept{" "}
                      </button>
                      <button class="btn-gernal me-4"> Reject </button>
                    </div>
                  </div>
                  <div className="Req_header   d-md-flex mb-2 p-4 col-md-12 ">
                    <div className="col-md-6 d-flex justify-content-start align-items-center ">
                      <div>
                        <div>
                          <div className="Req_Circle "></div>
                        </div>
                      </div>
                      <div className=" ">
                        <p class="blue-bold-txt-large mx-4 mb-0   ">
                          Balqees Hamdi{" "}
                        </p>
                        <p class="black-bold-txt-small mx-4 ">
                          Front end developer
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end justify-content-sm-end align-items-center">
                      <button class="btn-gernal btn-accept mx-2">
                        {" "}
                        Accept{" "}
                      </button>
                      <button class="btn-gernal me-4"> Reject </button>
                    </div>
                  </div>
                  <div className="Req_header  d-flex mb-5 p-4 col-md-12 ">
                    <div className="col-md-6 d-flex justify-content-start align-items-center ">
                      <div>
                        <div className="Req_Circle "></div>
                      </div>
                      <div className=" ">
                        <p class="blue-bold-txt-large mx-4 mb-0   ">
                          Balqees Hamdi{" "}
                        </p>
                        <p class="black-bold-txt-small mx-4 ">
                          Front end developer
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end justify-content-sm-end align-items-center">
                      <button class="btn-gernal btn-accept mx-2">
                        {" "}
                        Accept{" "}
                      </button>
                      <button class="btn-gernal me-4"> Reject </button>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="Req_header mb-2 p-3 d-flex justify-content-between align-items-center">
                      <div className="col-md-4 col-sm-12">
                        <h2 className="black-reguar-txt-mediam">
                          Website UI design implementation
                        </h2>
                      </div>
                      <div className="col-md-2 col-sm-12 ">
                        <span className="blue-reguar-txt-small ">
                          2022/7/31
                        </span>{" "}
                        <span className="blue-reguar-txt-small mx-2 ">
                          Published
                        </span>{" "}
                      </div>
                      <div className="res1 col-md-4 col-sm-12 d-flex justify-content-end  align-items-center ">
                        <button className="btn-gernal btn-new-request mx-2    ">
                          3 Requests
                        </button>
                        <span className="Req_span ">
                          <Trash />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 req-d">
                    <div className="Req_header mb-2 p-3 d-flex justify-content-between align-items-center">
                      <div className="col-md-4 col-sm-12">
                        <h2 className="black-reguar-txt-mediam">
                          Website UI design implementation
                        </h2>
                      </div>
                      <div className="col-md-2 col-sm-12 ">
                        <span className="blue-reguar-txt-small ">
                          2022/7/31
                        </span>{" "}
                        <span className="blue-reguar-txt-small mx-2 ">
                          Published
                        </span>{" "}
                      </div>
                      <div className="res1 col-md-4 col-sm-12 d-flex justify-content-end  align-items-center ">
                        <button className="btn-gernal btn-new-request mx-2   ">
                          3 Requests
                        </button>
                        <span className="Req_span ">
                          <Trash />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="Req_header mb-2 p-3 d-flex justify-content-between align-items-center">
                      <div className="col-md-4 col-sm-12">
                        <h2 className="black-reguar-txt-mediam">
                          Website UI design implementation
                        </h2>
                      </div>
                      <div className="col-md-2 col-sm-12 ">
                        <span className="blue-reguar-txt-small ">
                          2022/7/31
                        </span>{" "}
                        <span className="blue-reguar-txt-small mx-2 ">
                          Published
                        </span>{" "}
                      </div>
                      <div className="res1 col-md-4 col-sm-12 d-flex justify-content-end  align-items-center ">
                        <button className="btn-gernal btn-new-request mx-2  ">
                          3 Requests
                        </button>
                        <span className="Req_span ">
                          <Trash />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
