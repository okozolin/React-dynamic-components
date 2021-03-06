import { chunk } from 'lodash'
import * as React from 'react'
import { Col, Row, Grid } from 'react-flexbox-grid'

const GridGenerator = ({ cols, children }) => {
    const colWidth = 12 / cols
    const rows = chunk(React.Children.toArray(children), cols)
    return (
        <Grid>
            {rows.map((cols,i) => (
                <Row key={i}>
                    {cols.map((col) => (
                        <Col sm={12} md={colWidth} key={col.key}>
                            {col}
                        </Col>
                    ))}
                </Row>
            ))}
        </Grid>
    )
}
export default GridGenerator
