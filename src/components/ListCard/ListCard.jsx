import React, { useEffect, useRef, useState } from 'react';
import styles from './ListCard.module.css';
import { useNavigate } from 'react-router';
import NavigateTo from '../../functions/NavigateTo';

export default function ListCard({
	id,
	icon,
	imag,
	title,
	subTitle,
	value,
	subValue,
	pill = "",
	isExpandMember = false,
	isExpandBranch = false,
	isExpandStaff = false,
	isExpandPlan = false,
	toggleExpand
}) {
	const [pillVal, varient] = pill.split("|");
	const initial = icon ? icon : title.split("  ").map((word) => word[0]).join("");
	const iconClass = icon ? `${"material-symbols-outlined"} ${styles.Pl__avatar}` : styles.Pl__avatar;
	const contentRef = useRef(null);
	const [height, setHeight] = useState("0px");
	useEffect(() => {
		if (isExpandMember || isExpandBranch || isExpandStaff || isExpandPlan) {
			setHeight(`${contentRef.current.scrollHeight}px`);
		} else {
			setHeight("0px");
		}
	}, [isExpandMember, isExpandBranch, isExpandStaff, isExpandPlan]);

	return (
		<div className={styles.Pl__cardContainer}>
			<div
				className={styles.Pl__card}
				onClick={() => toggleExpand(id)}>
				<div className={styles.Pl__left}>
					{
						imag ?
							(
								<div className={styles.Pl__avatar}>
									<img src={imag} alt="" />
								</div>
							) : (
								<div className={`${iconClass}`}>{initial}</div>
							)
					}

					<div>
						<h3>{title}</h3>
						<p>{subTitle}</p>
					</div>
				</div>
				<div className={styles.Pl__right}>
					{
						pillVal &&
						<div className={`${styles.Pl__pill} ${styles[varient]}`}>
							{pillVal}
						</div>
					}
					<strong>{value}</strong>
					<span>{subValue}</span>
				</div>
			</div>
			<div
				ref={contentRef}
				className={styles.Pl__expandWrapper}
				style={{ maxHeight: height }}>
				{
					isExpandMember &&
					<ExpandableMember />
				}
				{
					isExpandBranch &&
					<ExpandableBranch />
				}
				{
					isExpandStaff &&
					<ExpandableStaff />
				}
				{
					isExpandPlan &&
					<ExpandablePlan />
				}
			</div>
		</div>
	);
}

function ExpandableMember() {
	return (
		<div className={styles.Emem__actions}>
			<div className={styles.Emem__actionGroup}>
				<button
					type="button"
					className={styles.Emem__actionButton}
					onClick={() => NavigateTo("/app/member-details")}>
					<span className={`material-symbols-outlined ${styles.Emem__actionIcon}`}>
						visibility
					</span>
					View
				</button>
				<button
					type="button"
					className={styles.Emem__actionIconButton}
					aria-label="Call member"
				>
					<span className={`material-symbols-outlined ${styles.Emem__actionIcon}`}>
						call
					</span>
				</button>
			</div>
			<button type="button" className={styles.Emem__paymentButton}>Collect Payment</button>
		</div>
	);
}

function ExpandableBranch() {
	return (
		<div className={styles.Bm__expanded}>
			{/* Stats */}
			<div className={styles.Bm__statsGrid}>
				<div className={styles.Bm__statCard}>
					<small>Total</small>
					<strong>25</strong>
				</div>

				<div className={styles.Bm__statCard}>
					<small>Active</small>
					<strong className={styles.Bm__green}>
						18
					</strong>
				</div>

				<div className={styles.Bm__statCard}>
					<small>Growth</small>
					<strong>+12%</strong>
				</div>
			</div>

			{/* Actions */}
			<div className={styles.Bm__actionGrid}>
				<button>
					<span className="material-symbols-outlined">
						edit
					</span>

					<small>Edit</small>
				</button>

				<button>
					<span className="material-symbols-outlined">
						add_card
					</span>

					<small>Add Plan</small>
				</button>

				<button>
					<span className="material-symbols-outlined">
						person_add
					</span>

					<small>Add User</small>
				</button>

				<button>
					<span className="material-symbols-outlined">
						delete
					</span>

					<small>Delete</small>
				</button>
			</div>
		</div>
	);
}

function ExpandableStaff() {
	const staff = {
		name: "Marcus Chen",
		role: "Senior Trainer • Downtown Branch",
		phone: "+1 (555) 012-3456",
		designation: "Head Personal Trainer",
		expanded: true,
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDarf7KJa3fEAeopONgs3bp7pq7FuO_G7iV8OZlPvoMUnrphtZLGw22_IjRWenJErDVw3P7fOcDPyLbYTiU3oxPyaZqM0oRtCR1aHTXuw43QfP_IFf4AW5mVspM1Il1xbQDvYGSuNrkd0sXY7IvAB1RsrWA4R1ODbZK66Cq8H5u0MamyKFcgtXsCJ6KF3W4ljK8xg9-gi3jvPHOuQSpnLI7M6VoizmbQBvp_TTNgTu7Lk_uH-d2SaRVA3u0T-NlUQJDKerBm6Q70kmy",
	}
	return (
		<div className={styles.Sm__expandedContent}>
			<div>
				<small className={styles.Sm__small}>Phone</small>
				<p>{staff.phone}</p>
			</div>
			<div>
				<small className={styles.Sm__small}>Branch</small>
				<p>Branch Name</p>
			</div>
			<div>
				<small className={styles.Sm__small}>Role</small>
				<p>{staff.designation}</p>
			</div>

			<div className={styles.Sm__actionRow}>
				<button className={styles.Sm__reAssign}>
					<span className="material-symbols-outlined">
						edit
					</span>

					Edit
				</button>

				<button className={styles.Sm__reAssign}>
					<span className="material-symbols-outlined">
						sync_alt
					</span>

					Reassign
				</button>

				<button
					className={styles.Sm__deleteButton}
				>
					<span className="material-symbols-outlined">
						delete
					</span>
				</button>
			</div>
		</div>
	)
}

function ExpandablePlan() {
	const features = [
		"All-day access to gym facilities",
		"Free steam & sauna access",
		"Personal locker included",
	]
	return (
		<div className={styles.Pm__expanded}>
			<h4>Plan Features</h4>
			<ul className={styles.Pm__featureList}>
				{features.map(
					(feature, featureIndex) => (
						<li key={featureIndex}>
							<span className="material-symbols-outlined">
								check_circle
							</span>

							{feature}
						</li>
					)
				)}
			</ul>

			{/* Actions */}
			<div className={styles.Pm__actionGrid}>
				<button>
					<span className="material-symbols-outlined">
						edit
					</span>

					<small>Edit Plan</small>
				</button>

				<button>
					<span className="material-symbols-outlined">
						palette
					</span>

					<small>Accent</small>
				</button>

				<button
					className={styles.Pm__deleteButton}
				>
					<span className="material-symbols-outlined">
						delete
					</span>

					<small>Delete</small>
				</button>
			</div>
		</div>
	);
}