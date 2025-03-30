import React from 'react';
import './SkillsPage.css';
import SkillPageSection from './skillsPageSection.jsx';
import CpSection from './cpSection';
import { useState } from 'react';

const SkillsPage = () => {
    const [show, isShow] = useState(false);

    const handleCP = () => {
        isShow(!show);
    }

    return (
        <>
            <div className="skills-page-container">
                <SkillPageSection />
                <br /><br />
                <button className='cpButton' onClick={handleCP}>Click To reveal Stats</button>
                <br /><br />
                {show && <CpSection />}
            </div>
        </>
    );
};

export default SkillsPage;
