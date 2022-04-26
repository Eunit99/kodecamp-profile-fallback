import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { fakeData } from "./fakeData";

export default function App() {
	const [data, setData] = useState(fakeData);
	const fetchURL = "https://jsonplaceholder.typicode.com/users";

	useEffect(
		(fetchURL) => {
			fetch(fetchURL)
				.then((response) => response.json())
				.then((fetchData) => {
					setData(fetchData[0]);
					console.log(fetchData[0]);
				});
		},
		[fetchURL]
	);

	return (
		<>
			<div className="container">
				<div className="row">
					{data.map((card) => (
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4"
						key={card.id}
						>
							<div className="card">
								<div className="card-body">
									<h1 className="text-left name mt-3">{card.name} </h1>
									<div className="text-left mb-3">
										{card.company.catchPhrase}{" "}
									</div>
									<div className="card-text mt-3">
										<h2 className="g-info">General Info</h2>
										<table className="table table-striped">
											<tbody>
												<tr>
													<th scope="row">Username</th>
													<td>{card.username} </td>
												</tr>
												<tr>
													<th scope="row">Address</th>
													<td>
														{card.address.street}, {card.address.suite}{" "}
													</td>
												</tr>
												<tr>
													<th scope="row">Email</th>
													<td>{card.email} </td>
												</tr>
												<tr>
													<th scope="row">Phone</th>
													<td>{card.phone} </td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
