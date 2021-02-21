import React from 'react';

function Stats() {

    return (
        <section className="relative mt-10 mb-5 mx-20">
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Last 30 days
                </h3>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                Ratio
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                71,897
                            </dd>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                Upload
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                58.16%
                            </dd>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                Download
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                24.57%
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </section>
    );
}
export default Stats;
