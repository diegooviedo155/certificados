import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Post from './post';
import course from './course'
import certificate from './certificate';

const Codigofacilito = ()=> {
    const data = useStaticQuery(graphql`
    {
        codigofacilitoJson {
            data {
            certificates {
                title
                score
                code
                }
            courses {
                title
                progress
                url
                }
            }
        }
    }
    `);

    return (
        <section className="container mx-auto">
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Post 
                        data={data.codigofacilitoJson.data.certificates}
                        card={certificate}
                        title="Mis Certificados Online en CodigoFacilito"
                        />

                    <Post 
                        data={data.codigofacilitoJson.data.courses}
                        card={course}
                        title="Mis cursos"
                        />
                </div>
            </div>
        </section>
    );
}

export default Codigofacilito;