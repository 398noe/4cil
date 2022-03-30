import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowPointer, faUniversalAccess, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Form, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-light py-5">
                <div className="p-5">
                    <h1 className="display-2 fw-bold lh-1 mb-3">最強の、四文字属性。</h1>
                    <h2 className="display-5 lh-1 mb-3">4 Character Internet License</h2>
                    <p className="lead">4CILは著作物の利用規約をすぐに意思表明できるサービスです</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">使ってみる <FontAwesomeIcon icon={faArrowPointer} /></button>
                        <button type="button" className="btn btn-success btn-lg px-4">ライセンス一覧 <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </div>
            </div>
            <Container className="py-5" id="about">
                <h1 className="border-bottom mb-4">About</h1>
                <h2 className="h3">4CILは著作物の利用規約をすぐに意思表明できるサービスです</h2>
                <p>著作物の利用規約は各サイトによって様々であり、利用者は各サイトの利用規約をサイトごとに確認する必要があります。また、利用規約を書く側にとっては、他サイトの文を参考に長い利用規約を記す必要があります。4CILは、そのような手間を減らすべく、リンクを貼ることで簡単に著作物の利用規約、特にその著作物の利用と加工改変、再配布に関する意思表明ができるお手伝いをします</p>
                <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
                    <Col className="feature d-flex flex-column align-items-center">
                        <div className="feature-icon p-4" >
                            <FontAwesomeIcon icon={faUniversalAccess} size="8x" className="text-primary" />
                        </div>
                        <h2>4文字のチカラ</h2>
                        <p>4文字のチカラはとっても強大！<br />例えば君が「icl1」と発言するだけで、「私の書いたイラスト、無断使用しないで！」という意思表明ができるよ！</p>
                    </Col>
                    <Col className="feature d-flex flex-column align-items-center">
                        <div className="feature-icon p-4">
                            <FontAwesomeIcon icon={faShareNodes} size="8x" className="text-success" />
                        </div>
                        <h2>見やすいライセンス</h2>
                        <p>4CILはOGPに対応！TwitterやFacebook, Discordなどにリンクを貼ると、君の意思表明が画像になってみんなにすぐ見えるようになるよ！</p>
                    </Col>
                    <Col className="feature d-flex flex-column align-items-center">
                        <div className="feature-icon p-4">
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="8x" />
                        </div>
                        <h2>分かりやすいリンク</h2>
                        <p>4CILのURL形式はとてもシンプル！<Link href={"/"}>https://4cil.ga/</Link>のあとに「非商用を示す"n"と許可するレベル」「商用を示す"c"と許可するレベル」で表すだけ！<br />例えば<Link href={"/n7c7"}>https://4cil.ga/n7c7</Link>みたいな感じ！</p>
                    </Col>
                </Row>
            </Container>
            <Container className="py-5" id="howto">
                <h1 className="border-bottom mb-4">How to use</h1>
                <p>以下の項目を許可するか許可しないか選ぶことで、簡単にリンクを生成できます</p>
                <Form>
                    <Row className="row-cols-3">
                        <Col></Col>
                        <Col><p>非商用利用</p></Col>
                        <Col><p>商用利用</p></Col>
                        <Col><p>素材の利用</p></Col>
                        <Col>

                            <Form.Select>
                                <option value="o">許可します</option>
                                <option value="x">許可しません</option>
                            </Form.Select>

                        </Col>
                        <Col>

                            <Form.Select>
                                <option value="o">許可します</option>
                                <option value="x">許可しません</option>
                            </Form.Select>

                        </Col>
                        <Col><p>素材の加工・改変</p></Col>
                        <Col>

                            <Form.Select>
                                <option value="o">許可します</option>
                                <option value="x">許可しません</option>
                            </Form.Select>

                        </Col>
                        <Col>

                            <Form.Select>
                                <option value="o">許可します</option>
                                <option value="x">許可しません</option>
                            </Form.Select>

                        </Col>
                        <Col><p>素材の再配布</p></Col>
                        <Col>

                            <Form.Select>
                                <option value="o">許可します</option>
                                <option value="x">許可しません</option>
                            </Form.Select>

                        </Col>
                        <Col>

                            <Form.Select>
                                <option value="o">許可します</option>
                                <option value="x">許可しません</option>
                            </Form.Select>

                        </Col>
                        <Col><p>クレジット表記</p></Col>
                        <Col>

                            <Form.Select>
                                <option value="oo">利用・再配布どちらも必要です</option>
                                <option value="ox">再配布に限り必要です</option>
                                <option value="xx">不要です</option>
                            </Form.Select>

                        </Col>
                        <Col>
                            <Form.Select>
                                <option value="oo">利用・再配布どちらも必要です</option>
                                <option value="ox">再配布に限り必要です</option>
                                <option value="xx">不要です</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
                <h2>貼り付けるリンク</h2>
                <p>以下のリンクを素材のライセンス先のリンクに貼り付けてください</p>
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            https://4cil.ga/
                        </InputGroup.Text>
                        <FormControl id="generated-url" defaultValue={"n5c5"} />
                        <Button variant="success">
                            COPY
                        </Button>
                    </InputGroup>
                </Form>
                <h3>ライセンスの例</h3>
                <ul>
                    <li>見るだけにして！使ったりしちゃだめ！ → https://4cil.ga/n0c0</li>
                    <li>動画共有サイトで使う素材にしていいよ！クレジット表記はつけてね！ → https://4cil.ga/n3c3</li>
                    <li>非商用目的ならWeb記事で自由に使っていいよ！クレジット表記もいらないよ！商用目的では使わないでね！ → https://4cil.ga/n4c0</li>
                    <li>何しても大丈夫！パブリックドメイン！ → https://4cil.ga/n7c7</li>
                </ul>
            </Container>
        </>
    );
}

export default Home
