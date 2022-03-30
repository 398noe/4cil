import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { Col, Container, Form, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';

const License: NextPage = () => {
    return (
        <>
            <Container className="pt-5 text-center">
                <h1 className="mx-5 mt-5 text-center">N5C3ライセンス</h1>
                <p>非商用利用レベル5 : 商用利用レベル3</p>
            </Container>
            <hr />
            <Container className="py-3">
                <h2 className="pb-4">説明</h2>
                <p>このライセンスを持つ素材は、非商用利用目的での素材の利用・加工改変・再配布が許可されます。素材の利用・再配布時にはともにクレジット表記が必要です</p>
                <p>このライセンスを持つ素材は、商用利用目的での素材の利用・加工改変が許可されます。素材の再配布は許可されません。素材の利用にあたってクレジット表記は不要です</p>
                <Row className="g-4 py-5 row-cols-3">
                    <Col xs={2} md={4}></Col>
                    <Col xs={5} md={4} className="feature d-flex flex-column text-center">
                        <div className="feature-icon p-4">
                            <FontAwesomeIcon icon={faCircle} size="6x" className="text-primary" />
                        </div>
                        <h3 className="text-center">許可されるもの</h3>
                    </Col>
                    <Col xs={5} md={4} className="feature d-flex flex-column text-center">
                        <div className="feature-icon p-4">
                            <FontAwesomeIcon icon={faXmark} size="6x" className="text-danger" />
                        </div>
                        <h3>許可されないもの</h3>
                    </Col>
                    <Col xs={2} md={4}>
                        <h3>非商用利用</h3>
                    </Col>
                    <Col xs={5} md={4} className="feature">
                        <h3>素材の利用・加工改変・再配布</h3>
                        <h3>利用・再配布いずれもクレジット表記が必要</h3>
                    </Col>
                    <Col xs={5} md={4} className="feature">
                    </Col>
                    <Col xs={2} md={4}>
                        <h3>商用利用</h3>
                    </Col>
                    <Col xs={5} md={4} className="feature">
                        <h3>素材の利用・加工改変</h3>
                        <h3>利用にあたってクレジット表記は不要</h3>
                    </Col>
                    <Col xs={5} md={4} className="feature">
                        <h3>素材の再配布</h3>
                    </Col>

                </Row>
            </Container>
            <hr />
            <Container className="py-3">
                <h2 className="pb-4">類似のライセンス</h2>
            </Container>
        </>
    );
}

export default License