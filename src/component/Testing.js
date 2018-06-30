/**
 * Created by rozer on 6/30/2018.
 */
import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'

class Testing extends Component {
    render(){
        return(
            <div>
                <ContentLoader>
                    {/* Pure SVG */}
                    <rect x="0" y="0" rx="5" ry="5" width="100" height="80" />
                    <rect x="0" y="83" rx="2" ry="2" width="70" height="4" />
                    <rect x="0" y="89" rx="4" ry="4" width="4" height="4" />
                    <rect x="7" y="89" rx="2" ry="2" width="26" height="4" />
                    <rect x="35" y="89" rx="2" ry="2" width="21" height="4" />
                    <rect x="70" y="89" rx="0" ry="0" width="30" height="4" />
                </ContentLoader>
            </div>
        )
    }
}

export default Testing
