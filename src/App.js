import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export default function ApiTest() {
  const baseurl ='https://agsmcs.info/'
  const [email, setemail] = useState("dvesdklvtmn@eurokool.com");
  async function signup() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      jsonrpc: "2.0",
      params: {
        email: email,
        login: email,
        password: "Tanvir2020@",
        name: "Tanvir Ishtiaq",
      },
    });

    var requestOptions = {
      method: "POST",

      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function authenticate() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      jsonrpc: "2.0",
      params: {
        db: "Panorama06022023",
        login: email,
        password: "Tanvir2020@",
      },
    });

    var requestOptions = {
      method: "POST",
      credentials: 'include',
      headers:  {
        "Content-Type":"application/json",
      },
      body: raw,
      
      redirect: "follow",
    };

    fetch("https://agsmcs.info/web/session/authenticate", requestOptions)
      .then(async (response) => {
        for(let entry of response.headers.entries()) {
          console.log('header', entry);
        }
        let json = await response.headers.get('Set-Cookie');
        console.log(json);
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function CreateProfile() {
    var myHeaders = {
      "Content-Type": "application/json",
    };

    var raw = JSON.stringify({
      first_name: "John",
      last_name: "Doe",
      business_name: "Panorama",
      tittle: "Software Engineer",
      responsibilities: "Accounts, Products",
      email: "csquzyrgkdo@eurokool.com",
      phone: "019908191312",
      industry_id:
        "Administration, Business Support & Waste Management Services-(NAICS 56)",
      business_type: "IT Business",
      business_state: "turnaround",
      where_from_about_us: "facebook",
      referral_code: "91798",
      promo_code: "728634jhgd",
      website: "www.test.com",
      address_line: "Test",
      address_line_two: "Test",
      city: "Mohakhali DOHS",
      state_id: "Dhaka",
      country_id: "Bangladesh",
      zip: "1440",
      business_age: "4",
      legal_structure: "Test",
      revenue_currency: "55",
      revenue_range: "5000",
      employee_number: "2",
      physical_location: "10",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      credentials:"include",
      redirect: "follow",
    };
    console.log(myHeaders)
    fetch(`${baseurl}/create_profile`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function GetProfile() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      credentials:"include",
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseurl}get_profile/JD-14-BD-00005`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function UpdateProfile() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
    );

    var raw = JSON.stringify({
      first_name: "John",
      last_name: "Doe",
      business_name: "Panorama",
      tittle: "Software Engineer",
      responsibilities: "Accounts, Products",
      email: "test@gmail.com",
      phone: "019908191312",
      industry_id:
        "Administration, Business Support & Waste Management Services-(NAICS 56)",
      business_type: "IT Business",
      business_state: "turnaround",
      where_from_about_us: "facebook",
      referral_code: "91798",
      promo_code: "728634jhgd",
      website: "www.test.com",
      address_line: "Test",
      address_line_two: "Test",
      city: "Mohakhali DOHS",
      state_id: "Dhaka",
      country_id: "Bangladesh",
      zip: "1440",
      business_age: "4",
      legal_structure: "Test",
      revenue_currency: "BDT",
      revenue_range: "5000",
      employee_number: "2",
      physical_location: "10",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://66.228.54.131/update_profile/JD-DH-BD-0003", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function onboarding_question() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
    );

    var raw = JSON.stringify({
      ques_one: [
        "What is your goal with Panorama?",
        "Find Solutions for my Business",
      ],
      ques_two: [
        "What is your goal with Panorama?",
        "Understand my Business Better",
      ],
      ques_three: [
        "What is your goal with Panorama?",
        "Solve my Business Problems",
      ],
      ques_four: [
        "What is your goal with Panorama?",
        "Find Solutions for my Business",
      ],
      ques_five: [
        "What is your goal with Panorama?",
        "Understand my Business Better",
      ],
      ques_six: [
        "What is your goal with Panorama?",
        "Solve my Business Problems",
      ],
      ques_seven: [
        "What is your goal with Panorama?",
        "Find Solutions for my Business",
      ],
      ques_eight: [
        "What is your goal with Panorama?",
        "Understand my Business Better",
      ],
      ques_nine: [
        "What is your goal with Panorama?",
        "Solve my Business Problems",
      ],
      ques_ten: [
        "What is your goal with Panorama?",
        "Find Solutions for my Business",
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://66.228.54.131/onboarding_question/JD-14-BD-00005",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function statusCheck() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_user_status/36", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function GetPlan() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_plans/JD-14-BD-00005", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function currency() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://66.228.54.131/get_currencies", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  // async function AssesmentList() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append(
  //     "Cookie",
  //     "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
  //   );

  //   var raw = JSON.stringify({});

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "http://66.228.54.131/get_assessments/JD-14-BD-00005",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }
  async function MailSend() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
    );

    var raw = JSON.stringify({
      subject: "Assessment Report",
      body: "<div>dear Sohan,<br/> Here is your assessment report</div>",
      recipient_emails: "tanvirish123@gmail.com",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://66.228.54.131/api/send_email", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function getInvoice() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=4d4f3c9cc2a849e4a1df189e02318fdfccd13b6d"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_invoice/JD-14-BD-00005", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function getPurpose() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      dashboard: "PURPOSE",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function logout() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://66.228.54.131/web/session/destroy", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function people() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      dashboard: "PEOPLE",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function technology() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      dashboard: "OPERATION & TECHNOLOGY",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function customer() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      dashboard: "CUSTOMER",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function cashflow() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      dashboard: "CASH FLOW",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function report() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      dashboard: "REPORTING & FEEDBACK",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function financial() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      dashboard: "PURPOSE",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  async function marketing() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      dashboard: "MARKETING",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_dashboard/SR-14-BD-00002", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function assesment() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://66.228.54.131/get_assessment_list/SR-DH-BD-0001",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function getAssesment() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_assessment/SR-DH-BD-0001", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function createAssesment() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      vision_question_lines: [
        ["Do you have the right people in your organization?", "yes"],
        ["Do you have the right people in the right seat?", "yes"],
        [
          "Do you have an easy-to-maintain organizational chart to understand your human resources",
          "no",
        ],
        [
          "Do you perform a skill gap analysis regularly? At least once a year.",
          "yes",
        ],
        ["Do you have a cross training process in place?", "unsure"],
      ],
      mission_template_lines: [
        [
          "Do you know why your organization exists? (FYI, It's not about the money)",
          "yes",
        ],
        [
          "Do you know what is your business's purpose, cause, or passion?",
          "no",
        ],
        ["Do you know what business you are?", "yes"],
        ["Do you have a clear understanding of what you do?", "unsure"],
      ],
      value_template_lines: [
        [
          "Do you know what your core values are? They should be vital and timeless.",
          "yes",
        ],
        ["Do you know what values are unique to your organization?", "yes"],
        [
          "Is this value something you can expect your most devoted coworkers to live by, even when it involves some sacrifice?",
          "no",
        ],
        [
          "Do you have your core value written and communicated to all your employees?",
          "yes",
        ],
        [
          "Do you hire, fire, review, reward, and recognize people based on the core values?",
          "unsure",
        ],
      ],
      people_template_lines: [
        ["Do you have the right people in your organization?", "yes"],
        ["Do you have the right people in the right seat?", "yes"],
        [
          "Do you have an easy-to-maintain organizational chart to understand your human resources",
          "no",
        ],
        [
          "Do you perform a skill gap analysis regularly? At least once a year.",
          "yes",
        ],
        ["Do you have a cross training process in place?", "unsure"],
      ],
      customer_template_lines: [
        ["Do you know who your customers are?", "yes"],
        ["Do you understand their pain points?", "yes"],
        ["Do you know what bothers them so much that they lose sleep?", "no"],
        ["Do you have customer appreciation initiatives?", "unsure"],
      ],
      marketing_template_lines: [
        ["Do you have a clearly defined marketing plan?", "yes"],
        ["Do you have differentiators clearly stated?", "unsure"],
        ["Do you have an internal marketing team?", "no"],
        ["Do you know your competition?", "unsure"],
      ],
      operation_template_lines: [
        [
          "Do you have a process to align the operations team with the sales team?",
          "yes",
        ],
        ["Do you understand their pain points?", "yes"],
        ["Do you have the core process simplified and documented?", "no"],
        [
          "Do you have a continuous process improvement mindset in the organization?",
          "unsure",
        ],
      ],
      reporting_template_lines: [
        ["Do you have timely reporting on those KPIs?", "no"],
        ["Do you understand their pain points?", "yes"],
        ["Do you know the key drivers of your business?", "unsure"],
      ],
      finance_template_lines: [
        ["Do you have a list of all recurring meetings?", "no"],
        ["Do you get feedback for each meeting?", "yes"],
        ["Do you follow the best practices for meetings?", "unsure"],
        ["Do you get feedback for each meeting?", "unsure"],
      ],
      planning_template_lines: [
        ["Do you know the key drivers of your business?", "no"],
        ["Do you follow the best practices for meetings?", "unsure"],
        ["Do you have a list of all reports and distribution lists?", "unsure"],
      ],
      others_template_lines: [
        ["Do you know the key drivers of your business?", "no"],
        ["Do you follow the best practices for meetings?", "unsure"],
        ["Do you have a list of all reports and distribution lists?", "unsure"],
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/create_assessment", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function updateAssesment() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({
      vision_question_lines: [
        ["Do you have the right people in your organization?", "no"],
        ["Do you have the right people in the right seat?", "no"],
        [
          "Do you have an easy-to-maintain organizational chart to understand your human resources",
          "no",
        ],
        [
          "Do you perform a skill gap analysis regularly? At least once a year.",
          "no",
        ],
        ["Do you have a cross training process in place?", "unsure"],
      ],
      mission_template_lines: [
        [
          "Do you know why your organization exists? (FYI, It's not about the money)",
          "yes",
        ],
        [
          "Do you know what is your business's purpose, cause, or passion?",
          "yes",
        ],
        ["Do you know what business you are?", "yes"],
        ["Do you have a clear understanding of what you do?", "yes"],
      ],
      value_template_lines: [
        [
          "Do you know what your core values are? They should be vital and timeless.",
          "yes",
        ],
        ["Do you know what values are unique to your organization?", "yes"],
        [
          "Is this value something you can expect your most devoted coworkers to live by, even when it involves some sacrifice?",
          "no",
        ],
        [
          "Do you have your core value written and communicated to all your employees?",
          "yes",
        ],
        [
          "Do you hire, fire, review, reward, and recognize people based on the core values?",
          "unsure",
        ],
      ],
      people_template_lines: [
        ["Do you have the right people in your organization?", "yes"],
        ["Do you have the right people in the right seat?", "yes"],
        [
          "Do you have an easy-to-maintain organizational chart to understand your human resources",
          "no",
        ],
        [
          "Do you perform a skill gap analysis regularly? At least once a year.",
          "yes",
        ],
        ["Do you have a cross training process in place?", "unsure"],
      ],
      customer_template_lines: [
        ["Do you know who your customers are?", "yes"],
        ["Do you understand their pain points?", "yes"],
        ["Do you know what bothers them so much that they lose sleep?", "no"],
        ["Do you have customer appreciation initiatives?", "unsure"],
      ],
      marketing_template_lines: [
        ["Do you have a clearly defined marketing plan?", "yes"],
        ["Do you have differentiators clearly stated?", "unsure"],
        ["Do you have an internal marketing team?", "no"],
        ["Do you know your competition?", "unsure"],
      ],
      operation_template_lines: [
        [
          "Do you have a process to align the operations team with the sales team?",
          "yes",
        ],
        ["Do you understand their pain points?", "yes"],
        ["Do you have the core process simplified and documented?", "no"],
        [
          "Do you have a continuous process improvement mindset in the organization?",
          "unsure",
        ],
      ],
      reporting_template_lines: [
        ["Do you have timely reporting on those KPIs?", "no"],
        ["Do you understand their pain points?", "yes"],
        ["Do you know the key drivers of your business?", "unsure"],
      ],
      finance_template_lines: [
        ["Do you have a list of all recurring meetings?", "no"],
        ["Do you get feedback for each meeting?", "yes"],
        ["Do you follow the best practices for meetings?", "unsure"],
        ["Do you get feedback for each meeting?", "unsure"],
      ],
      planning_template_lines: [
        ["Do you know the key drivers of your business?", "no"],
        ["Do you follow the best practices for meetings?", "unsure"],
        ["Do you have a list of all reports and distribution lists?", "unsure"],
      ],
      others_template_lines: [
        ["Do you know the key drivers of your business?", "no"],
        ["Do you follow the best practices for meetings?", "unsure"],
        ["Do you have a list of all reports and distribution lists?", "unsure"],
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/update_assessment/19", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function getconsultant() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/get_consultants/SR-DH-BD-0001", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  async function assesmentDeadline() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "session_id=215cf68502f8f5cdf89685e487a582e72ca1d564"
    );

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://66.228.54.131/assessment_deadline", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <button onClick={() => signup()}>Signup</button>
      <button onClick={() => authenticate()}>Authenticate</button>
      <button onClick={() => logout()}>Logout</button>
      <button onClick={() => CreateProfile()}>CreateProfile</button>
      <button onClick={() => GetProfile()}>GetProfile</button>
      <button onClick={() => UpdateProfile()}>UpdateProfile</button>
      <button onClick={() => onboarding_question()}>Onboarding Question</button>
      <button onClick={() => statusCheck()}>Status Check</button>
      <button onClick={() => GetPlan()}>Get Plan</button>
      <button onClick={() => currency()}>Currency</button>
      {/* <button onClick={() => AssesmentList()}>Assesment List</button> */}
      <button onClick={() => MailSend()}>Mail Send</button>
      <button onClick={() => getInvoice()}>Get Invoice</button>
      <button onClick={() => getPurpose()}>Purpose</button>
      <button onClick={() => people()}>People</button>
      <button onClick={() => technology()}>Orientation and technology</button>
      <button onClick={() => customer()}>Customer</button>
      <button onClick={() => cashflow()}>Cashflow</button>
      <button onClick={() => report()}>Reporting And Feedback</button>
      <button onClick={() => financial()}>Financial Control</button>
      <button onClick={() => marketing()}>Marketing</button>
      <button onClick={() => assesment()}>Assesment List</button>
      <button onClick={() => getAssesment()}>Get Assesment</button>
      <button onClick={() => createAssesment()}>Create Assesment</button>
      <button onClick={() => updateAssesment()}>Update Assesment</button>
      <button onClick={() => getconsultant()}>Get Consultant</button>
      <button onClick={() => assesmentDeadline()}>Assesment Deadline</button>
    </div>
  );
}
