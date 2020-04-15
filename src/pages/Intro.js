import React from "react";

// Styles
import "../styles/Intro.css";

// assets
import RoshniIcon from "../assets/roshnidas.jpeg";

// mock data
import tableData from "../mockData/staticTableData";

// component
import ProgressBar from "../components/progress/progress";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faHome,
  faCalendarAlt,
  faBook,
  faUser,
  faDollarSign,
  faStar,
  faGraduationCap,
  faClock,
  faEnvelope,
  faSearch,
  faBell,
  faDiceFour,
  faCaretDown,
  faPlusCircle,
  faPen,
  faTrashAlt,
  faCaretLeft,
  faCaretRight,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const Intro = () => {
  const leftSideMenuData = [
    {
      icon: <FontAwesomeIcon icon={faHome} />,
      name: "Home",
    },
    {
      icon: <FontAwesomeIcon icon={faCalendarAlt} />,
      name: "Schedule",
    },
    {
      icon: <FontAwesomeIcon icon={faBook} />,
      name: "Library",
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      name: "Profile",
    },
    {
      icon: <FontAwesomeIcon icon={faDollarSign} />,
      name: "Fees Structure",
    },
    {
      icon: <FontAwesomeIcon icon={faStar} />,
      name: "Examinations",
    },
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      name: "Academics",
    },
    {
      icon: (
        <div className="attendance-icon-container">
          <FontAwesomeIcon icon={faClock} />
        </div>
      ),
      name: "Attendance",
    },
    {
      icon: "",
      name: <span className="leave-history">Leave History</span>,
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      name: "Inbox",
    },
  ];

  const getLeftSideMenuIcons = () => {
    return leftSideMenuData.map((item) => {
      return (
        <div className="row intro-container-left-details-menu">
          <div className="col-sm-4 col-md-4 intro-container-left-details-menu-items-image">
            {item.icon}
          </div>
          <div className="col-sm-8 col-md-8 intro-container-left-details-menu-items-text">
            <p className="left-side-menu-text">{item.name}</p>
          </div>
        </div>
      );
    });
  };

  const getTableData = () => {
    return (
      <table className="header-contents-table">
        <thead>
          <tr>
            <th>
              <span className="table-header-font-size">From Date</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </th>
            <th>
              <span className="table-header-font-size">To Date</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </th>
            <th>
              <span className="table-header-font-size">Reason</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </th>
            <th>
              <span className="table-header-font-size">Applied Date</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </th>
            <th>
              <span className="table-header-font-size">Status</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr>
                <th className="table-row-content">{item.fromDate}</th>
                <th className="table-row-content">{item.toDate}</th>
                <th className="table-row-content">{item.reason}</th>
                <th className="table-row-content">{item.appliedDate}</th>
                <th className="table-row-content">
                  <div className="header-table-status">
                    {item.status === "Applied" && (
                      <span className="header-table-status-text">
                        {item.status}
                      </span>
                    )}
                    {item.status === "Approved" && (
                      <span className="header-table-status-text green-text">
                        {item.status}
                      </span>
                    )}
                    {item.status === "Rejected" && (
                      <span className="header-table-status-text red-text">
                        {item.status}
                      </span>
                    )}
                    {item.status === "In Progress" && (
                      <span className="header-table-status-text blue-text">
                        {item.status}
                      </span>
                    )}

                    <div className="header-table-status-icon">
                      <FontAwesomeIcon icon={faPen} />
                    </div>
                    <div className="header-table-status-icon">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                  </div>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const chartData = [
    { leaves: "Russia", area: 10, color: "red" },
    { leaves: "Canada", area: 20 },
    { leaves: "USA", area: 10 },
    { leaves: "China", area: 60 },
  ];

  return (
    <div className="intro-continer">
      <div className="intro-container-left">
        <div className="intro-container-left-details">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className="font-awesome-left-menu-icon"
          />
          <div className="intro-container-left-details-image">
            <img
              src="https://webcomicms.net/sites/default/files/clipart/172008/mountain-png-transparent-images-172008-3554729.png"
              alt="Samrat Icon"
              className="intro-container-left-details-image-icon"
            />
            <p className="bold-font-weight custom-font-color intro-container-left-details-image-text">
              Graduate School
            </p>
          </div>
          {getLeftSideMenuIcons()}
          <p className="intro-container-left-details-footertext">
            Powered by Nexquare
          </p>
        </div>
      </div>
      <div className="intro-container-right">
        <div className="intro-container-right-header">
          <div className="header-back-icon">
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>
          <div className="header-text">
            <p>Attendance / Leave History</p>
          </div>
          <div className="header-icon-1">
            <img
              src={RoshniIcon}
              alt="Roshni Das Icon"
              className="header-icon-1-image"
            />
          </div>
          <div className="header-icon-2">
            <img
              src={RoshniIcon}
              alt="Roshni Das Icon"
              className="header-icon-2-image"
            />
          </div>
          <div className="header-search-bar">
            <label htmlFor="search" className="header-search-label">
              Search
            </label>
            <input
              type="search"
              name="search"
              className="header-search-bar-input"
              disabled
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="header-search-label-icon"
            />
          </div>
          <div className="header-back-icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="header-icon-name-container">
            <img
              src={RoshniIcon}
              alt="Roshni Das"
              className="header-icon-name"
            />
            <div className="header-icon-fullname">
              <p>Long</p>
              <p>Long surname</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faDiceFour} className="header-dice-icon" />
        </div>
        <div className="intro-contents-container">
          <div className="intro-contents-container-left">
            <div className="intro-contents-container-left-firstRow">
              <div className="intro-contents-container-left-firstRow-searchbar">
                <div className="header-search-bar">
                  <label
                    htmlFor="search"
                    className="header-search-label-type-2"
                  >
                    Search
                  </label>
                  <input
                    type="search"
                    name="search"
                    className="header-search-bar-input-type-2"
                    disabled
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="header-search-label-icon"
                  />
                </div>
                <div className="header-search-container">
                  <div className="header-search-bar">
                    <label
                      htmlFor="search"
                      className="header-search-label-type-2"
                    >
                      All
                    </label>
                    <input
                      type="search"
                      name="search"
                      className="header-search-bar-input-type-3"
                      disabled
                    />
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="header-search-label-icon"
                    />
                  </div>
                  <div className="header-search-bar">
                    <label
                      htmlFor="search"
                      className="header-search-label-type-2"
                    >
                      Apply for leave
                    </label>
                    <input
                      type="search"
                      name="search"
                      className="header-search-bar-input-type-4"
                      disabled
                    />
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="header-search-label-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="intro-contents-container-table">
                {getTableData()}
              </div>
              <div className="intro-contents-container-footer">
                <div className="intro-contents-container-right-icon-container left-icon">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <span className="footer-text light-text">1</span>
                <span className="footer-text light-text">2</span>
                <span className="footer-text light-text">3</span>
                <span className="footer-text light-text">4</span>
                <span className="footer-text bold-font-weight">5</span>
                <span className="footer-text light-text">6</span>
                <span className="footer-text light-text">7</span>
                <span className="footer-text light-text">8</span>
                <span className="footer-text light-text">9</span>
                <div className="intro-contents-container-right-icon-container right-icon">
                  <FontAwesomeIcon icon={faCaretRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="intro-contents-container-right">
            <div className="intro-contents-container-right-icons">
              <div className="intro-contents-container-right-icon-container left-icon">
                <FontAwesomeIcon icon={faCaretLeft} />
              </div>
              <div className="intro-contents-container-right-icon-container right-icon">
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
            </div>
            <div className="right-image-container">
              <img
                src={RoshniIcon}
                alt="Roshni Das"
                className="right-container-image"
              />
              <p className="right-container-image-name">Jessica John James</p>
              <p className="right-container-image-details">
                <FontAwesomeIcon icon={faTrophy} />
                <span className="right-container-image-details-contents">
                  FS1 Acasia
                </span>
              </p>
            </div>
            <div className="right-leave-reasons">
              <p className="right-leave-reasons-text">Reasons for Leave:</p>
              <div className="intro-contents-container-right-icon-container-2">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div className="header-search-bar-2">
                <label htmlFor="search" className="header-search-label-type-2">
                  YTD
                </label>
                <input
                  type="search"
                  name="search"
                  className="header-search-bar-input-type-3"
                  disabled
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="header-search-label-icon"
                />
              </div>
            </div>
            <div className="right-leave-details">
              <div className="right-leave-details-1">
                <ProgressBar progressValue={75} color="primary" />
                <p className="right-leave-details-1-value">2</p>
                <div className="right-leave-details-1-text">
                  <p className="right-leave-details-1-text-content">Family</p>
                  <p className="right-leave-details-1-text-content">Function</p>
                </div>
              </div>
              <div className="right-leave-details-2">
                <ProgressBar progressValue={40} color="primary" />
                <p className="right-leave-details-1-value">2</p>
                <div className="right-leave-details-1-text">
                  <p className="right-leave-details-1-text-content">Sick/Unw</p>
                  <p className="right-leave-details-1-text-content">ell</p>
                </div>
              </div>
              <div className="right-leave-details-2">
                <ProgressBar progressValue={25} color="secondary" />
                <p className="right-leave-details-1-value">1</p>
                <div className="right-leave-details-1-text">
                  <p className="right-leave-details-1-text-content">Family</p>
                  <p className="right-leave-details-1-text-content">
                    Emergency
                  </p>
                </div>
              </div>
            </div>
            <div className="right-leave-details-graph">
              <div className="right-leave-details-graph-contents-background"></div>
              <div className="right-leave-details-graph-contents">
                <Chart data={chartData}>
                  <PieSeries valueField="area" argumentField="leaves" />
                  <Animation />
                </Chart>
              </div>
            </div>
            <p className="pie-chart-text">Total 07</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
