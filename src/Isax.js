import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class IsaxIconList extends Component {
	render() {
		const swalToast = withReactContent(Swal);

		const fireToastNotifcation = (e) => {
			swalToast.fire({
				toast: true,
				position: "top-end",
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				didOpen: (toast) => {
					toast.addEventListener("mouseenter", Swal.stopTimer);
					toast.addEventListener("mouseleave", Swal.resumeTimer);
				},
				icon: "success",
				title: "Code has been copied!",
			});
		};

		const { iconsClassList } = this.props;

		const isacIcons = iconsClassList.map((classList, index) => {
			let className = "isax " + classList;
			let iconCode = `<i class=${className}></i>`;
			return (
				<div
					key={index.toString()}
					className="flex flex-col items-center rounded-xl bg-crayola py-4 text-4xl text-white"
				>
					<i className={className}></i>
					<div className="flex items-center px-3 pt-4 text-base">
						<pre className="whitespace-pre-wrap text-xs">
							{iconCode}
						</pre>
						<CopyToClipboard
							text={iconCode}
							onCopy={fireToastNotifcation}
						>
							<span
								className="isax isax-copy cursor-pointer"
								value={iconCode}
							></span>
						</CopyToClipboard>
					</div>
				</div>
			);
		});
		return <div className="icons-holder">{isacIcons}</div>;
	}
}

export default IsaxIconList;
