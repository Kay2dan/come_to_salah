import React, { Component } from "react";
import { graphql } from "gatsby";
import { Title } from "bloomer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import PraySalahContent from "../components/PraySalahContent";
import PaginationParent from "../components/PaginationParent";
import "../styles/howToPraySalah.sass";

class HowToPraySalah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStepId: "standingForNiyyah",
      currentStep: 0,
      stepsInSalah: [],
    };
  }

  // filter data from gql by excluding null objects/ entries returned
  // by gql. Func used to extract 'salah steps', 'how to pray salah',
  // 'salah recitation' & 'title' from the gql data into the data obj.
  getEachSection = (data, navigateTo) => {
    const { edges } = data.allDataJson;
    const rtnData = {}; // recitations, prayer, steps, title
    edges.forEach(obj => {
      const { node } = obj;
      switch (node.title) {
        case "Salah Steps":
          rtnData.steps = node.steps;
          break;
        case "How To Pray Salah":
          rtnData.title = node.title;
          rtnData.prayer = node.prayers.find(
            eachPrayer => eachPrayer.heading.split(",")[0] === navigateTo
          );
          break;
        case "Salaat Recitation":
          rtnData.recitations = node.recitations;
          break;
        case "Vector Illustrations":
          rtnData.illustrations = node.illustrations;
          break;
        default:
          return;
      }
    });
    return rtnData;
  };

  // getStepSequenceFromGqlData => finds the obj which contains the
  // salah steps sequence array based on the title of the node;
  // Used to find the current active step data to display &
  // to update the component state.
  // returns: an array of all the steps for the prayer
  getStepSequenceFromGqlData = (data, navigateTo) => {
    const { edges } = data.allDataJson;
    const prayers = edges.find(
      nodes => nodes.node.title === "How To Pray Salah"
    ).node.prayers;
    return prayers.find(each => each.heading.split(",")[0] === navigateTo)
      .stepSequenceIds;
  };

  componentDidMount() {
    const { data, location } = this.props;
    const navigateTo = location.state ? location.state.navigateTo : "Fajr";
    const stepSequence = this.getStepSequenceFromGqlData(data, navigateTo);
    this.setState({
      stepsInSalah: stepSequence,
    });
  }

  paginationCtrlOnClickHandler = ev => {
    let evTarget = ev.target;
    if (!evTarget.hasAttribute("disabled")) {
      const btnType = evTarget.classList.contains("pagination-next");
      const { currentStep, stepsInSalah } = this.state;
      const newStepVal = btnType ? currentStep + 1 : currentStep - 1;
      this.setState({
        currentStep: newStepVal,
        currentStepId: stepsInSalah[newStepVal],
      });
    }
  };

  paginationLinkOnClickHandler = ev => {
    const evTarget = ev.target;
    const { stepsInSalah } = this.state;
    const dataRef = evTarget.getAttribute("data-ref");
    let pos = 0;
    stepsInSalah.forEach((s, i) => (s === dataRef ? (pos = i) : false));
    this.setState({
      currentStepId: dataRef,
      currentStep: pos,
    });
  };

  render() {
    const { data, location } = this.props;
    const navigateTo = location.state ? location.state.navigateTo : "Fajr";
    const { currentStep, currentStepId, stepsInSalah } = this.state;
    const {
      recitations,
      prayer,
      steps,
      title,
      illustrations,
    } = this.getEachSection(data, navigateTo);
    const { heading, rakaats, stepSequenceIds } = prayer;
    let currentStepTxt;
    for (const step of stepSequenceIds) {
      if (step === currentStepId) {
        // eslint-disable-next-line no-loop-func
        steps.forEach(v =>
          v.id === currentStepId ? (currentStepTxt = v) : false
        );
      }
    }
    return (
      <div>
        <Layout>
          <SEO
            title="How to pray Salaat"
            keywords={[`salah`, `salaat`, `salat`, `prayer`]}
          />
          <div className="howToPraySalahPageWrapper">
            <div className="titleContainer">
              <Title isSize={4}>{title}</Title>
            </div>
            <div className="contentContainer">
              <PraySalahContent
                currentStepId={currentStepId}
                currentStepTxt={currentStepTxt}
                heading={heading}
                illustrations={illustrations}
                rakaats={rakaats}
                recitations={recitations}
              />
              <PaginationParent
                currentStep={currentStep}
                linkCollection={stepsInSalah}
                paginationLinkOnClickHandler={this.paginationLinkOnClickHandler}
                paginationCtrlOnClickHandler={this.paginationCtrlOnClickHandler}
              />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export const query = graphql`
  {
    allDataJson(
      filter: {
        title: {
          in: [
            "How To Pray Salah"
            "Salaat Recitation"
            "Salah Steps"
            "Vector Illustrations"
          ]
        }
      }
    ) {
      edges {
        node {
          title
          steps {
            id
            heading
            content {
              ...stepsData
            }
          }
          prayers {
            id
            heading
            stepSequenceIds
            rakaats {
              type
              offering
            }
          }
          recitations {
            ...recitationData
          }
          illustrations {
            salahType
            stances {
              ...svgIllustrationData
            }
          }
        }
      }
    }
  }
  fragment recitationData on DataJsonRecitations {
    id
    arabic
    transliteration
    translation
  }
  fragment stepsData on DataJsonStepsContent {
    id
    classes
    eleType
    txt
    insertion {
      location
      recitationId
    }
  }
  fragment svgIllustrationData on DataJsonIllustrationsStances {
    id
    name
    paths {
      pathId
      d
    }
  }
`;

HowToPraySalah.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default HowToPraySalah;
