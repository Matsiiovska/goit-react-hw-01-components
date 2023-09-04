import PropTypes from "prop-types";
import { SectionStatistics, ZagTitle, StatList, ItemLi, SpanLabel, SpanPerc } from "./Statistics.styled";
import getRandomHexColor from "./GetRandomColor";

export const Statistics = ({ title, stats}) => {
    return (
        <SectionStatistics>
            {title && <ZagTitle>{title}</ZagTitle>}
            
            <StatList>
                {stats.map(({id,label,percentage}) => {
                     return (<ItemLi key={id} style={{backgroundColor: getRandomHexColor()}}>
                        <SpanLabel>{label}</SpanLabel>
                        <SpanPerc>{percentage}%</SpanPerc>
                    </ItemLi>)  
                 })
                }
            </StatList>
        </SectionStatistics>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}