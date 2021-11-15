import React from 'react'
import * as S from './footer.style'

export default function Footer() {
	return (
		<S.Footer>
			<div className="container">
				<S.Footer1>
					<div>© 2021 Shopee. Tất cả các quyền được bảo lưu.</div>
					<S.Language>
						Ngôn ngữ:
						<span>Tiếng Anh</span>
						<span>Tiếng Việt</span>
					</S.Language>
				</S.Footer1>
			</div>
		</S.Footer>
	)
}
