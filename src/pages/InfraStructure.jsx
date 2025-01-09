import React from 'react'
import RND from './Infrastructure/RND'
import Production from './Infrastructure/Production'
import Mechanical from './Infrastructure/Mechanical'
import QA from './Infrastructure/QA'
import ESS from './Infrastructure/ESS'
function InfraStructure() {
    return (
        <div>
            <RND />
            <Production />
            <Mechanical />
            <ESS />
            <QA />
        </div>
    )
}

export default InfraStructure