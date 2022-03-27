import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-light py-5 px-3 p-lg-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 px-3 p-lg-5">
                    <div className="col-12">
                    <h1 className="display-2 fw-bold lh-1 mb-3">最強の、四文字属性。</h1>
                    <h2 className="display-5 lh-1 mb-3">4 Character Internet License</h2>
                        <p className="lead">4CILはインターネット上の創作物を守るためのライセンス規格です。</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">使ってみる <FontAwesomeIcon icon={faArrowPointer} /></button>
                            <button type="button" className="btn btn-success btn-lg px-4">ライセンス一覧 <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home
