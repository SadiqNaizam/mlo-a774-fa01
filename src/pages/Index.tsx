import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import ActivityCardGrid from '../components/Home/ActivityCardGrid';

/**
 * IndexPage serves as the main entry point for the booking platform.
 * It utilizes the MainAppLayout to structure the page with a consistent
 * header and sidebar, and renders the ActivityCardGrid as the primary content.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <ActivityCardGrid />
    </MainAppLayout>
  );
};

export default IndexPage;
