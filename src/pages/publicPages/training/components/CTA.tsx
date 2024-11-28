import CallToAction from "@components/callToAction/callToAction";
import PublicPageContainer from "@components/container/PublicPageContainer";

export const CTA = () => {
  return (
    <PublicPageContainer>
      <CallToAction
        text="Unsure which course suits you? Connect with our professionals for a Career Alignment Test and get personalized guidance on the best path for your goals."
        linkText="Take a Career Alignment Test!"
      />
    </PublicPageContainer>
  );
};
export const CTARequestScholarship = () => {
  return (
    <CallToAction
      text="Apply for a scholarship if financial support is needed to access our training programs. Limited spots available—submit your request today and take the first step toward advancing your career!"
      linkText="Request Scholarship"
    />
  );
};
